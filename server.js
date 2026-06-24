const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors()); 
app.use(express.json());
app.use(express.static("public"));

// 記憶體暫存
let levelClearCount = 0;
let minAttackCount = null; // ⭐ 預設為 null，代表還沒有人過關過

// 路由 1：獲取目前數據（過關次數 + 歷史最少攻擊次數）
app.get('/api/clears', (req, res) => {
    res.json({ 
        clearCount: levelClearCount,
        bestAttack: minAttackCount === null ? 0 : minAttackCount // 如果是 null 就顯示 0
    });
});

// 路由 2：當玩家過關時呼叫（同時傳入這次的攻擊次數）
app.post('/api/clear', (req, res) => {
    levelClearCount += 1;
    
    // 從 GDevelop 傳過來的 JSON 資料中，取出這次的攻擊次數
    const currentAttack = Number(req.body.attackTimes); 

    // ⭐ 核心邏輯：比對是否為「最少攻擊次數」
    if (minAttackCount === null || currentAttack < minAttackCount) {
        minAttackCount = currentAttack; // 更新歷史最佳紀錄
        console.log(`🎉 產生新的最佳紀錄！最少攻擊次數變為：${minAttackCount}`);
    }

    console.log(`有人過關！總過關：${levelClearCount}，本次攻擊：${currentAttack}，歷史最佳：${minAttackCount}`);
    
    res.json({ 
        message: "Success", 
        clearCount: levelClearCount,
        bestAttack: minAttackCount
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});