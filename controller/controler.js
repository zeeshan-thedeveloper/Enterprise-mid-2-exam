// Page loaders
const LoadHomePage=(req,res)=>{
    res.render('AddUser')
}

const LoadListOfUsersPage=(req,res)=>{
    res.render('UsersList',{user_id:req.query.user_id})
}

// Database manipulation

const registerUser=(req,res)=>{
    const image=req.files.image
    console.log(image)
    console.log(req.body);
    
    res.send("Adding user")
}

module.exports={
    LoadHomePage,
    LoadListOfUsersPage,
    registerUser,
}