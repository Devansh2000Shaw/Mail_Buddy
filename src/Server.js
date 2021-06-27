const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Devansh:Devansh2000@cluster0.iuipj.mongodb.net/MailBuddy?retryWrites=true&w=majority", {useNewUrlParser: true}, {useUnifiedTopology: true});

const nodeSchema = {
    title: String,
    cc: String,
    bcc: String
}

app.get("./components/EmailBody", function(req, res){
    res.send("Express is Working");
})

app.post("./components/EmailBody", function(req, res){
    let NewNode = new Node({
        title: req.body.title,
        cc: req.body.cc,
        bcc: req.body.bcc
    });
    NewNode.save();
})

app.listen(3000, function(){
    console.log("Server is running at port 3000");
})