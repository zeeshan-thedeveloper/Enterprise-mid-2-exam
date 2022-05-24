const express=require('express')
const controller=require('../controller/controler')
const routes=express()

routes.get("/",controller.LoadHomePage);

module.exports = routes;
