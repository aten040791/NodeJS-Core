require("dotenv").config({
  path: "./.env",
});
require("rootpath")();
const express = require("express");
const bodyParser = require("body-parser");
const router = require("routes/api");
const { swaggerUIServe, swaggerUISetup } = require("kernels/api-docs");
const path = require("path");

const app = express();
app.disable("x-powered-by");

app.use(express.urlencoded({ extended: true }));

// user css, js
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use("/", [], router);
app.use(express.json());

// todo: swagger
app.use("/api-docs", swaggerUIServe, swaggerUISetup);

module.exports = app;
