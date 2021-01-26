
const express= require('express');
var bodyParser=require("body-parser"); 

const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/Blog_Table',{ useUnifiedTopology: true ,useNewUrlParser: true }); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 	
var app=express() 
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

const Blog_Schema = require('../Schema/BlogSchema');

app.post('/',async function(req,res){
    let _id = req.body.BlogDate;
    let Title = req.body.BlogTitle;
    let Content = req.body.BlogContent;

    let msg = await Blog_Schema.find({Date:_id})
    if(msg.length!=0)
    {
        res.send("Unsuccesfull page..Go Back and Change the date")
            
    }
   
    else{
    let data =new Blog_Schema({
        "Date":_id,
        "Title" : Title,
        "Content":Content
    })

    const doc = await data.save() 
		
        console.log(doc)	
        res.render('success_page')}}
)

module.exports = app;