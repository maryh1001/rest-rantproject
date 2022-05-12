// require needed modules
require("dotenv").config();
const express = require("express");

// initialize
const app = express();

// express settings
app.set('views', __dirname + '/views');
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"))

// import router from places
app.use("/places", require("./controllers/places"));

// homepage route
app.get("/", function (req, res) {
  res.render("home");
});

app.get("*", function (req, res) {
  res.render("error404");
});

// listen
app.listen(process.env.PORT);
