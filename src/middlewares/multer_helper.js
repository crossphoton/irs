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
  
  var upload = multer({ 
      storage: storage,
      fileFilter: function(req, file, callback) {
          if(path.extname(file.originalname) !== '.csv') {
              return callback(new Error('Only csv files allowed!'));
          }
          callback(null, true)
      }
    }).single('inputFile');


module.exports = upload;