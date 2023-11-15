require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDB = require("./database/db");


const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(routes);

connectToDB().then(() => {
    app.listen(port, () => console.log(`Server Running in ${port}`));

})
