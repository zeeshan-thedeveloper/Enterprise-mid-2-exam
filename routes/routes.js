const express=require('express')
const controller=require('../controller/controler')
const routes=express()

routes.get("/Register",controller.LoadHomePage);
routes.get("/UsersList",controller.LoadListOfUsersPage);
routes.post("/registerUser",controller.registerUser);

module.exports = routes;
