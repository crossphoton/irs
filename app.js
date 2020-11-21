const express = require("express");
require("dotenv").config();

const app = express();


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const router = require("./src/routes/mainRouter");



app.use("/api", router);



app.listen(process.env.PORT, ()=>console.log("Server started at "+process.env.PORT));