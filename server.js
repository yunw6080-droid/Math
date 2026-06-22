let express = require("express");
let server = express();
var bodyParser = require("body-parser");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

server.get("/", function(req,res){
    console.log(req.query);
    res.send("Hello!");
})
server.get("/upScore", (req,res)=>{
    //write DB

    res.send("Hello!");
})

server.post("/", (req, res)=>{
    res.send("OK")
})

server.listen(8080, ()=>{
    console.log("Server is running.");
})
