var express = require("express");
var app = express();
const cors= require("cors");
app.use(cors());

var mongoose = require("mongoose");
var User = require("./models/schema");
var vehicle= require("./models/vehicles");
var Alert= require("./models/Alerts");

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
    
    app.get("/vehicles", async function (req, res) {
        const response = await vehicle.find();
        res.json(response);
    });
    app.get("/alerts", async function (req, res) {
        const response = await Alert.find();
        res.json(response);
    });


});


var port = process.env.port || 5000
app.listen(port, function (req, res) {
    console.log(`server started at port ${port}`);
});