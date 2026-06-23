const express = require("express");
const cors = require("cors"); 
const server = express();

const PORT = process.env.PORT || 8080;

server.use(cors()); 
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// ⭐ 關鍵：加入這行（確保這行在下面的路由之前）
server.use(express.static("public"));

let globalClearCount = 0;

// 注意：因為上面啟用了靜態資料夾，如果 public 裡面有 index.html，
// 這裡的 server.get("/") 就會被 index.html 取代，這正是我們想要的！
// 如果你想保留測試，可以把這個首頁路由註解掉或刪除。
/*
server.get("/", function(req, res){
    res.send("Server is alive!");
});
*/

server.get("/getScore", (req, res) => {
    res.json({ count: globalClearCount });
});

server.post("/upScore", (req, res) => {
    globalClearCount += 1;
    console.log(`有人過關了！目前總過關次數：${globalClearCount}`);
    res.json({ message: "Score updated successfully", count: globalClearCount });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});