var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var fileUpload = require('express-fileupload');
var db = require('./model/DatabaseConnector')
// Initializing app
const app = express();

// configure the app
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload())
app.set('view engine', 'ejs')
app.set('view',path.join(__dirname, 'views'))

// routes
var routes = require('./routes/routes')

// Setting up routes

app.use("/", routes)

app.listen(3000,()=>{
    console.log("Listening to port 3000")
});  
