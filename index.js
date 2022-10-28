require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDB = require("./database/db");

connectToDB();
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())
app.use(routes);

app.listen(process.env.PORT, () => console.log("Server Running"));