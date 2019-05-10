"run": "DEBUG=dev:users babel node src/../



import debug from 'debug'

static getAllUsers(req, res){
try
{
	if(data.length){     //data.length for when not returning a particular data.
return nullResponse(req, res);
}
//usercontroller.logger()(JSON.stringify(data, null, '\t'))
	return res.status(200).json({
	message:'',
	data,
	status:
}catch 
{ 
return res.status(500).json({
message: 'pass message in here';
error:'unknownerror or whatever'.
}
}

message: '`user ${req.params.id} received successfully
data[req.params.id]

if(!data[req.params.id]){     //==========data.length for when not returning a particular data.
return nullResponse(req, res);
}

//** https://restfulapi.net/http-status-codes/
//https://httpstatuses.com

//=============================================================================

indent objects rather than array if you like

const users = 
0:{

},

1:{
}


message: '`user ${req.params.id} received successfully
data[req.params.id]

if(!data[req.params.id]){     //==========data.length for when not returning a particular data.
return nullResponse(req, res);
}

//==================================================

ERROR HANDLERS

helper/errorhandler.js
const nullResponse = (req, res) => {
return res.status(404).json({
message: 
error:
}

const internalServerErrorresponse = 


const badRequestResponse = (req, res) =>
{
return res.status(400).json({
message:
error:
});


const forbiddenResponse
//======================================================
MIDDLEWARES
																		import {badRequestResponse} from ....... (destructure).
class UserMiddleWare{
static checkUserId =   (req, res, next) => {
if(req.params.id> 0)
{
next()
}
else
{
return badRequestResponse(req, res);
}
}

export default UserMiddleWare


**Put middlewares in your routes but make your controller last on the list as in app.get('/', UserMiddleWare.checkUserID, UserController)
try put it in the order that it's in your code.    




already customized middlewares are morgan, routermiddleware
app.use(morgan)....      import morgan from 'morgan'       app.use(morgan('dev')) 



JWTs Json web token

npm install jsonwebtoken --save
npm install dotenv --save



auth.js
import jwt from 'jsonwebtoken';

class AuthMiddleWare
{
	static generateToken(req, res. next)
	{
	req.token = jwt.sign(req.body, process.env.JWT_SECRET_KEY, {expires in: 24 hours})
	return next();																					pass authmiddleware in your route (app.get ('/', authmiddleware,usercontroller)
	}
	
	
	import dotenv and call dotenv.config();
	in your .env file(JWT_SECRET_KEY = oisshjuekoeek)
	
	
	
	static signup(req, res)
	{
	userController.logger()(req.token)
	
	try{
	const reponse = data[0]; 
	data[req.params.id].token =req.token;   ////// //// response.token = req.token
	return res.staus(2000.json({
	message:'',
	data,
	status;
	}
	return res.status(200)
		
		
		
		
		
		
	static decodeToken(req, res, next)
	{
	req.user = jwt.verify(req,.body,token, process.env.JWT_SECRET_KEY); 
	if(!decoded)  or (!req,user)
	{
	return}
	
	return next;
	
	
	
	
	static login(req, res)
	
	const {user, 