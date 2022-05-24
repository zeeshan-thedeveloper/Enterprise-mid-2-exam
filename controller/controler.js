const {Users} =require('../model/Schemas/UserSchema')
const path = require("path")
const fs= require("fs")
// Page loaders
const LoadHomePage=(req,res)=>{
    res.render('AddUser')
}

const LoadListOfUsersPage=async (req,res)=>{
    const listOfUsers = await Users.find({});
    res.render('UserList',{listOfUsers})
}

const LoadUserUpdatePage= async (req,res)=>{
    const userData = await Users.find({_id:req.query.user_id});
    console.log(userData)
    res.render('UpdateUser',{userData})
}

const LoadDeleteInfoPage=(req,res)=>{
    res.render('DeleteInfo')
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

const upateUserData=(req,res)=>{
    console.log("Updating user data")
    console.log(req.body)
    const image=req.files.image
   
image.mv(path.resolve(__dirname,'../public/images', image.name),(error)=>{
    if(!error){

        Users.findById(req.query.user_id,(error,doc)=>{
            console.log(doc)
            if(!error){
                const oldImage=path.resolve(__dirname,'../public/images',doc.image)
                fs.unlinkSync(oldImage)

                Users.findByIdAndUpdate(req.query.user_id,{...req.body,image:image.name},(error, doc)=>{
                    if(!error){
                        res.redirect('/UsersList')
                    }
                    else{
                        console.log(error)
                        res.send("Error")
                        // res.redirect('/api/updateItem')
                    }
                })
            }
        })
    }
    else{
        res.send('Error')
    }
})

}

const removeUser=(req,res)=>{
    Users.deleteOne({_id:req.query.user_id},(error)=>{
        if(!error)
        {
            console.log("Delte")
            res.redirect(req.get('referer'));
        }
        else{
            res.send(error.message)
        }
    })
}

module.exports={
    LoadHomePage,
    LoadListOfUsersPage,
    registerUser,
    LoadUserUpdatePage,
    LoadDeleteInfoPage,
    upateUserData,
    removeUser
}