const express= require('express');

const app = express();
const port =4000;
const route = require("./route/router");
const handler = require("./handler/handler");
const retriever = require("./handler/Retrieve");
app.set('view engine','ejs');
app.use('/',route);
app.use('/handler',handler)
app.use('/Retrieve',retriever);



app.listen(port,()=>{
    console.log("port listening");
})