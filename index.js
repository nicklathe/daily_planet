var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));


var articlesArray = [];

app.get("/articles/new", function(req, res){
	res.render("articles/new");
})

app.post("/articles", function(req, res){
	articlesArray.push(req.body);
	// res.render("articles/index", {articles: articlesArray});
	res.render("articles/thanks")
})

app.get("/articles", function(req, res){
	res.render("articles/index", {articles: articlesArray});
})

app.get("/articles/:id", function(req, res){
	var index = req.params.id;
	res.render("articles/show", articlesArray[index]);
})






app.listen(3000);