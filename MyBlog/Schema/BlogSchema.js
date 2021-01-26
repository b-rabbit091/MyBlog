 const mongoose= require('mongoose');

 const schema= mongoose.Schema

 const Blog_Schema = new schema({

    Date : Date,
    Title:String, 
    Content:String,

})
module.exports = mongoose.model('Blog_Schema',Blog_Schema)

