const csv =require('csv-parser');
const fs = require('fs');
const results = [];

module.exports.Home = function(req,res){
   fs.createReadStream('D:/New_projects/CSV_Upload/uploads/sample_data.csv')
   .pipe(csv({})).on('data',(data)=> results.push(data))
   .on('end',()=> {
      console.log(results);
   });
    return res.render('home',{
        message:``,
        list:results
    });
}

module.exports.fileupload = function(req,res){

    // checking if file ot uploaded
    if(req.files){
        console.log(req.files);
        var file = req.files.file;
        var filename = file.name;
     
     // moving the uploaded to file to a specified folder("uploads!!!")   
      file.mv('./uploads/'+filename,function(err){
         if(err){
            res.render('home',{
             message:`Error in uploading ${err}`
           })}
           else{
           console.log(filename);
          // loading data from the file the fs stream
          fs.createReadStream(`D:/New_projects/CSV_Upload/uploads/${filename}`)
          .pipe(csv({})).on('data',(data)=> results.push(data))
          .on('end',()=> {
            // console.log(results);
           });
           return res.render('home',{
            message:`file upload scussessful : ${filename}`,
            list:results
           }); 
       }
      })
    }
}