const express = require("express");
const app = express();
const router = express.Router();


//import routers
const homeRouter = require('./router/home-router');

//routes
app.use('/',homeRouter);

//start serve
app.listen(3000, () =>{
	console.log("Serve up");
});