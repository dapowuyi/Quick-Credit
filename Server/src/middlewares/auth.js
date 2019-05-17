import jwt from 'jsonwebtoken';

class Auth
{
	static generateToken(req, res, next)
	{
	
	req.token = jwt.sign(req.body, process.env.JWT_SECRET_KEY, { expiresIn: '24h'}) 
	return next();																					
	}	
}


export default Auth;
