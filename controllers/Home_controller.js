const express = require('express');
const upload  = require('express-fileupload');

const app = express();

module.exports.Home = function(req,res){
    return res.render('home',{
        message:``
    });
}

module.exports.fileupload = function(req,res){
    if(req.files){
        console.log(req.files);
        var file = req.files.file;
        var filename = file.name;
     
      file.mv('./uploads/'+filename,function(err){
         if(err){
            res.render('home',{
             message:`Error in uploading ${err}`
           })}
           else{
           res.render('home',{
             message:`file upload scussessful : ${filename}`
           })
       }
    })
}
}