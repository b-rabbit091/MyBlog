const express= require("express");

const route = express.Router();


route.get("/",(req,res)=>

{
    res.render('index')
})

route.get("/WriteBlog",(req,res)=>
{
    res.render('WriteBlog')
})

route.get("/SearchBlog",(req,res)=>
{
    res.render('SearchBlog')
})

module.exports =route;
