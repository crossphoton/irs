const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();


mongoose.connect( process.env.MONGO_URL,
        { useNewUrlParser: true ,useUnifiedTopology: true },
        () => console.log('Connected to DB')
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const router = require("./src/routes/mainRouter");


app.use("/api", router);



app.listen(process.env.PORT, ()=>console.log("Server started at "+process.env.PORT));