const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // 允許 GDevelop 從不同網域傳送資料
app.use(express.json());

// 記憶體暫存（注意：重啟伺服器資料會消失，正式上線建議搭配資料庫如 MongoDB 或 PostgreSQL）
let levelClearCount = 0;

// 路由 1：獲取目前過關次數
app.get('/api/clears', (req, res) => {
    res.json({ count: levelClearCount });
});

// 路由 2：增加過關次數（當玩家過關時呼叫）
app.post('/api/clear', (req, res) => {
    levelClearCount += 1;
    res.json({ message: "Success", count: levelClearCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});