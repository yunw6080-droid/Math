const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors()); 
app.use(express.json({
    verify: (req, res, buf) => { req.rawBody = buf.toString('utf8'); }
}));
app.use(express.urlencoded({
    extended: true,
    verify: (req, res, buf) => { req.rawBody = buf.toString('utf8'); }
}));
app.use(express.static("public"));

function parseAttackTimes(body, rawBody) {
    if (body && typeof body === 'object' && body.attackTimes !== undefined) {
        const n = parseInt(body.attackTimes, 10);
        if (!isNaN(n)) return n;
    }
    const candidates = [];
    if (typeof rawBody === 'string' && rawBody.length > 0) candidates.push(rawBody);
    if (typeof body === 'string' && body.length > 0) candidates.push(body);
    for (const key of Object.keys(body || {})) {
        if (key.includes('attackTimes')) candidates.push(key);
    }
    for (const text of candidates) {
        try {
            const n = parseInt(JSON.parse(text).attackTimes, 10);
            if (!isNaN(n)) return n;
        } catch {}
        const match = String(text).match(/attackTimes["']?\s*:\s*(\d+)/);
        if (match) {
            const n = parseInt(match[1], 10);
            if (!isNaN(n)) return n;
        }
    }
    return NaN;
}

// 記憶體暫存
let levelClearCount = 0;
let minAttackCount = null; // 預設為 null，代表還沒有任何有效紀錄

// 路由 1：獲取目前數據（過關次數 + 歷史最少攻擊次數）
app.get('/api/clears', (req, res) => {
    res.json({ 
        clearCount: levelClearCount,
        // 確保如果是 null 或是 0，就回傳 0 給前端，避免前端顯示 null
        bestAttack: (minAttackCount === null || minAttackCount === 0) ? 0 : minAttackCount 
    });
});

// 路由 2：當玩家過關時呼叫（精準修正版）
app.post('/api/clear', (req, res) => {
    levelClearCount += 1;
    
    const currentAttack = parseAttackTimes(req.body, req.rawBody); 

    if (isNaN(currentAttack)) {
        console.log("⚠️ 警告：收到不正確的攻擊次數型態（非數字）！");
    } else {
        // ⭐ 核心修正邏輯：如果歷史紀錄是 null、是 0（初始卡住的值），或者這次攻擊次數更少，才允許更新！
        if (minAttackCount === null || minAttackCount === 0 || currentAttack < minAttackCount) {
            minAttackCount = currentAttack; // 更新歷史最佳紀錄
            console.log(`🎉 產生新的最佳紀錄！最少攻擊次數變為：${minAttackCount}`);
        }
    }

    console.log(`有人過關！總過關：${levelClearCount}，本次攻擊：${currentAttack}，歷史最佳：${minAttackCount}`);
    
    res.json({ 
        message: "Success", 
        clearCount: levelClearCount,
        bestAttack: minAttackCount === null ? 0 : minAttackCount
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});