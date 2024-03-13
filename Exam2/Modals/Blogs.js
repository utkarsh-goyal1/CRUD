const mongoose=require('mongoose');
const blogsSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true 
    },
    desc:{
        type:String,
        trim:true,
        required:true
    },
    img: {
        type :String,
        trim :true
    }
})
const blog=mongoose.model("Blog",blogsSchema);
module.exports=blog;