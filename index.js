const express = require ('express');
const app = express();
const port = 4000;
app.use('/assets',express.static(__dirname + '/assets'));
app.set('view engine','ejs');
app.set('views','./views');
const upload  = require('express-fileupload');
app.use(upload()) //middlle ware to upload a file

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`There was an error in setting up port : ${err}`);
    }
    else{
        console.log(`The port is up and running on: ${port}`);
    }
})