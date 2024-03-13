const mongoose=require("mongoose");
const blog=require('./Modals/Blogs')



const dummy=[
    {
        name:"Mastering the art of photography",
        desc:"Mastering the art of photography",
        img:"https://images.unsplash.com/photo-1551708919-5b50c2aceffa?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Mastering the art of photography",
        desc:"Mastering the art of photography",
        img:"https://images.unsplash.com/photo-1551708919-5b50c2aceffa?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Mastering the art of photography",
        desc:"Mastering the art of photography",
        img:"https://images.unsplash.com/photo-1551708919-5b50c2aceffa?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Mastering the art of photography",
        desc:"Mastering the art of photography",
        img:"https://images.unsplash.com/photo-1551708919-5b50c2aceffa?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
async function seedDB()
{
    await blog.insertMany(dummy);
    console.log("DB Seeded");
}
module.exports=seedDB;