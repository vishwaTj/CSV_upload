const multer = require('multer');
const path = require('path');
const Data_PATH = path.join('/uploads/data');

// Define the storage for the file
let storage = multer.diskStorage({
     destination: function (req,file,cb){
        cb(null,path.join(__dirname,'.',Data_PATH));
     },
     filename:function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now())
     }
})
