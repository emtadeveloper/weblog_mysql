const hbs = require("express-handlebars");
const path = require("path");
const express = require("express");

module.exports = app = (app) => {
  app.engine("handlebars", hbs.engine());
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "../views"));
  // Public اضافه کردن فایل های
  app.use("/static", express.static(path.join(__dirname, "../../public")));
};
