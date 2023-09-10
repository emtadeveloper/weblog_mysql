const expresss = require("express");

const app = expresss();

require("./bootstrap")(app);
require("./routes")(app);

app.get("/", (req, res) => {
  res.render("main", { layout: false, userID: 456 });
});

module.exports = () => {
  const port = process.env.APP_PORT;
  app.listen(port, () => {
    console.log(`app is runnig on port ${port}`);
  });
};
