var express = require("express");
var app = express();

var mongoose = require("mongoose");
var User = require("./models/schema");

const bodyParser = require("body-parser");
const { findOne } = require("./models/schema");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());

mongoose.connect("mongodb+srv://Himanshu:himanshu@zylu.jjheihn.mongodb.net/?retryWrites=true&w=majority").then(function () {
    app.get('/', function (req, res) {
        const response = { message: "API works good!!" };
        res.json(response);
    });
  
    app.get("/list", async function (req, res) {
        const response = await User.find();
        res.json(response);
    });

});


var port = process.env.port || 5000
app.listen(port, function (req, res) {
    console.log(`server started at port ${port}`);
});