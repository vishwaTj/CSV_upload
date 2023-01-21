const csv =require('csv-parser');
const fs = require('fs');
const results = [];


// /function to render the homepage
module.exports.Home = function(req,res){
  // Render home page initially sending an empty array
    return res.render('home',{
        message:``,
        list:[]
    });
}


// Function to upload and display sorted CSV data 
module.exports.fileupload = function(req,res){

    // checking if file ot uploaded
    if(req.files){
        var file = req.files.file;
        var filename = file.name;
     
     // moving the uploaded to file to a specified folder("uploads!!!")   
      file.mv('./uploads/'+filename,function(err){
         if(err){
            res.render('home',{
             message:`Error in uploading ${err}`
           })}
           else{

          // loading data from the file the fs stream
          fs.createReadStream(`D:/New_projects/CSV_Upload/uploads/${filename}`)
          .pipe(csv({})).on('data',(data)=> results.push(data))
          .on('end',()=> {

            // sorting the values in an order to display
              let sortedProducts = results.sort(
              (p1, p2) => (p1.id > p2.id) ? 1 : (p1.id < p2.id) ? -1 : 0); 
           });

           // render the home page with CSV data
           return res.render('home',{
            message:`file upload scussessful : ${filename}`,
            list:results
           }); 
       }
      })
    }
}