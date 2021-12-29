const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
app.use(bodyParser.urlencoded({extended:true}));

const arrData = [];

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    // res.send(req.body.fname, req.body.fclass);
    const allData = {
        Name: req.body.fname,
        Class: req.body.fclass
    };
    arrData.push(allData);
    arrData.forEach(function(data){
        res.write("Name:" + data.Name);
        res.write(" Class:" + data.Class);
    })
    res.send();
})

app.listen(5000);