const {Users} =require('../model/Schemas/UserSchema')
const path = require("path")
// Page loaders
const LoadHomePage=(req,res)=>{
    res.render('AddUser')
}

const LoadListOfUsersPage=(req,res)=>{
    res.render('UserList',{user_id:req.query.user_id})
}

// Database manipulation

const registerUser=(req,res)=>{
    const image=req.files.image
    console.log(image)
    console.log(req.body);
    image.mv(path.resolve(__dirname,'../../public/images',image.name),(error)=>{
        Users.create({...req.body,image:image.name},(error,user)=>{
            console.log(user)
            res.redirect(`/UsersList?user_id=${user._id}`) 
        })
    });
  
}

module.exports={
    LoadHomePage,
    LoadListOfUsersPage,
    registerUser,
}