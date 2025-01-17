const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// parses data from html, extended: true handles nested objects
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var calculate = num1 + num2;

  res.send("Your total calculation is " + calculate);
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var heightSq = height * height;

  var calculatedBMI = weight / heightSq;

  res.send("Your BMI is " + calculatedBMI);
});

app.listen(8081, function() {
  console.log("Server started on port 8081");
});
