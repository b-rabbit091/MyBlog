
const express = require('express');
var bodyParser=require("body-parser"); 

const route= express.Router();
route.use(bodyParser.json()); 
route.use(express.static('public')); 
route.use(bodyParser.urlencoded({ 
	extended: true
})); 

const Blog_Schema = require('../Schema/BlogSchema');

route.post('/', async function(req,res){ 
	
    let Date=req.body.ViewDate; 
    
    console.log(Date)
    let msg = await Blog_Schema.find({Date:Date})
    if(msg.length==0)
    {
        res.send("You have not written blog for the given date")
    }
  else
  {
      res.render('View_Blog',{msg:msg});
  }
  console.log(msg);

})

module.exports = route;
