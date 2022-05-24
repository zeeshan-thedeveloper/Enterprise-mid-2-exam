const express=require('express')
const controller=require('../controller/controler')
const routes=express()

routes.get("/Register",controller.LoadHomePage);
routes.get("/UsersList",controller.LoadListOfUsersPage);
routes.post("/registerUser",controller.registerUser);
routes.get("/UpdateUserData",controller.LoadUserUpdatePage);
routes.get("/DeletionInfo",controller.removeUser);
routes.post("/upateUserData",controller.upateUserData)
module.exports = routes;
