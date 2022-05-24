const {Users} =require('../model/Schemas/UserSchema')
const path = require("path")
// Page loaders
const LoadHomePage=(req,res)=>{
    res.render('AddUser')
}

const LoadListOfUsersPage=async (req,res)=>{
    const listOfUsers = await Users.find({});
    res.render('UserList',{listOfUsers})
}

// Database manipulation

const registerUser=(req,res)=>{
    const image=req.files.image
    console.log(image)
    console.log(req.body);
    image.mv(path.resolve(__dirname,'../public/images',image.name),(error)=>{
        Users.create({...req.body,image:image.name},(error,user)=>{
            console.log(user)
            res.redirect(`/UsersList`) 
        })
    });
  
}

module.exports={
    LoadHomePage,
    LoadListOfUsersPage,
    registerUser,
}