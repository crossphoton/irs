const router = require("express").Router();
const csv=require('csvtojson')

var pre = require('../processing/preprocessing.js');
var upload = require("../middlewares/multer_helper");


router.post('/submit', function(req, res){
    upload(req,res,function(err){
        if(err) {
            console.log(err);
            return res.send('Wrong File Type')
        }
        else {
            const filen = req.file.filename
            const csvpath = 'uploads/' + filen
            console.log("Received file, check: " + csvpath);
            csv()
              .fromFile(csvpath)
                .then((jsonObj)=>{           
                  pre(jsonObj);
                })
            res.send("Upload successful!");
        }
    });
});

module.exports = router;