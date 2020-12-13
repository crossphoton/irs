const router = require("express").Router();
const csv=require('csvtojson')

var pre = require('../processing/preprocessing.js');
var upload = require("../middlewares/multer_helper");
var getDataFromDatabase = require("../database/db").getData;


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
                  pre(jsonObj).then(id => res.redirect("/viewer?documentId="+id));
                })
        }
    });
});


router.get("/document/:documentId", (req, res)=>{
    const documentId = req.params.documentId;

    getDataFromDatabase(documentId, res);
})

module.exports = router;