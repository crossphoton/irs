const router = require("express").Router();

var multer = require('multer')
var path = require('path');
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
            const file = req.file.filename
            console.log("Received file, check uploads folder: " + file);
            res.send("Upload successful!");
        }
    });

});

module.exports = router;