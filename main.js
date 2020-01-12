// Templating Engine
const {
    config,
    engine
} = require("express-edge");
// Server
const express = require("express");
const edge = require("edge.js");
const bodyParser = require("body-parser");

const homePageController = require("./controllers/homePage.js");

const app = new express();

app.use(express.static("public"));
app.use(engine);
app.set("views", `${__dirname}/views`);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", homePageController);
app.use((req, res) => res.render('notFound'));
app.listen(5050);