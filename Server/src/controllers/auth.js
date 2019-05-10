import jwt from 'jsonwebtoken';

class AuthMiddleWare
{
	static generateToken(req, res, next)
	{
	req.token = jwt.sign(req.body, process.env.JWT_SECRET_KEY) 
	return next();																					
	}
}

export default AuthMiddleWare