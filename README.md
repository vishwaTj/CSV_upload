# CSV_upload
Use multer package functionality to upload csv data to server


    /* ************************* CSV upload *********************************** */
    
    brief : This is a simple Node js project were a csv file is uploded to the server and
            the data in it is read in the backend and it is displayed in a soted format
            on the webpage.
            
   
   The project folder is designed in a scalable file system consisting of
           1.) views folders --> for webpages
           2.) controllers --> for backend functioning
           3.) routes --> to direct the server to correct URL
           4.) uploads --> to store the uploaded csv files
           5.) assets --> for storing the css and js of the views
           
    views--> 
             The views folder has one home.ejs main home page
               the code inside is divided into 4 sections
                section 1 -> header
                section 2 -> input box to upload a file
                section 3 -> status message ("visible after upload")
                section 4 -> table to display the data
                
    
    controllers -->
               this contains a file home controller
                 there mainly two function
                  .home --> this function is to render th home page upon first arrival to website
                  .fileupload -->  this function has 4 parts 
                                   part 1 -> checking if the file got uploaded
                                   part 2 -> moving the uploaded file to uploads folder
                                   part 3 -> read the data inside the uploaded csv file
                                   part 4 -> sort the data based on index
                                    render the page            
                
    routes--> 
             The routes folder has the specified routes to specific functions of the controllers


    uploads -->
              the uploaded files get stored n this folder

    assets -->
             This has the styling part for the home page
               the styling is also divide into 4 sections
                section 1 -> header
                section 2 -> input box to upload a file
                section 3 -> status message ("visible after upload")
                section 4 -> table to display the data
              
