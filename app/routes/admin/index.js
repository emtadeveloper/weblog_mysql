const express = require("express");
const router = express.Router();

// routers

const dashboardRouter = require("./dashboard");
const postRouter = require("./posts");

router.use("/posts", postRouter);
router.use("/dashboard", dashboardRouter);

module.exports = router;
