const hbs = require("express-handlebars");
const path = require("path");
const bodyPaser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const flash = require('connect-flash')

module.exports = app = (app) => {
  app.use(bodyPaser.json());
  app.use(bodyPaser.urlencoded({ extended: false }));
  app.use(cookieParser("keyboard cat"));
  app.use(
    session({
      secret: "your-secret-key-here", // اینجا کلید رمزنگاری خود را قرار دهید
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60000 },
    })
  );
  app/use(flash())
  app.engine("handlebars", hbs.engine());
  app.set("view engine", "handlebars");
  app.set("views", path.join(__dirname, "../views"));
  // Public اضافه کردن فایل های
  app.use("/static", express.static(path.join(__dirname, "../../public")));
};
