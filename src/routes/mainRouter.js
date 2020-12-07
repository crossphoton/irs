const router = require("express").Router();
const { Console } = require("console");
const csv=require('csvtojson')
var multer = require('multer')
var path = require('path');

var Original ;
var Copy ;
var pre = require('../processing/preprocessing.js');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) 
  }
})

//var upload = multer({ storage: storage });
var upload = multer({ 
    storage: storage,
    fileFilter: function(req, file, callback) {
        if(path.extname(file.originalname) !== '.csv') {
            return callback(new Error('Only csv files allowed!'));
        }
        callback(null, true)
    }
  }).single('inputFile');

router.get("/", (req, res)=>{
    res.send("Hello from router");
    console.log("test succ");
})
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
                  Original = jsonObj;              
                  Copy = pre(Original);
                  console.log("This is copy:");
                  console.log(Copy);
                  console.log("\nThis is original :");
                  console.log(Original);
                })
        /*   console.log("This is original :\n");
            console.log(Original);
            console.log("This is copy:\n");
            console.log(Copy);*/
            res.send("Upload successful!");
        }
    });
});

module.exports = router;