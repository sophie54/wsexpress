const express = require("express");
const app = express();

const testMiddleware = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (day === 7 || (day === 6 && hour >= 9) || hour <= 17)
    res.redirect("/error");
  else next();
};

app.get("/", testMiddleware, (req, res) => {
  res.sendFile(__dirname + "/pubviews/Home.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/pubviews/Services.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/pubviews/Contact.html");
});
app.get("/error", (req, res) => {
  res.sendFile(__dirname + "/pubviews/error.html");
});
app.listen(3000, () => console.log("Server running on 3000"));
