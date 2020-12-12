const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();


mongoose.connect( process.env.MONGO_URL,
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
        (err) => {
                if(err) throw err;
                console.log("Database connected.");
        }
);

app.use(express.static("public", {extensions: ["html", "htm"]}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const router = require("./src/routes/mainRouter");


app.use("/api", router);


app.use((req, res, next)=>{
        res.status(404);
        if(req.accepts('html')){
                res.redirect("/404");
                return;
        }
        else{
                res.json({error: "Not found"});
                return;
        }
})


app.listen(process.env.PORT, ()=>console.log("Server started."));