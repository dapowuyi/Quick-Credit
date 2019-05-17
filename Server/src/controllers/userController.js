import User from '../models/db_user';
//import Auth from '../middlewares/auth';
import validator from 'validator'

class UserController  {

static listUsers(req, res) {
    return res.status(200).send(User);
    } 

 static createUser(req, res) {
    console.log(req.body)
      if (!req.body.firstname) {
        return res.status(400).send({
          message: 'Please, provide firstname'
        });
      }
        else if (!req.body.lastname) {
          return res.status(400).send({
            message: 'Please, provide lastname'
          });
        }

       else if (!req.body.email) {
        return res.status(400).send({
          message: 'Please, provide email address'
        });
      }

      else if (!validator.isEmail(req.body.email))
      {
        return res.status(400).send({
          message: "email invalid. please provide a valid one"
        })
      }
  
      else if (!req.body.password) {
        return res.status(400).send({
          success: 'false',
          message: 'Please, provide password.'
        });
      }

      else if(!validator.isAlphanumeric(req.body.password)  || !validator.isLength(req.body.password, {min:6}))
        {
            return res.status(400).send({
            message: "Password must be more than 6 characters and must contain letters, numbers capital letter and symbols"
          });
        }
  
      const status = 'unverified';
      const isAdmin = false;
      //const token = Auth.generateToken({id, firstname, lastname});
      const token = '8293033jkietquqlioepenquq78920322';
      const createdOn = new Date().toLocaleString();

      const user = {
        token: token,
        id: 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        status,
        isAdmin,
        createdOn
      };
        User.push(user);
           return res.status(201).send({
            message: 'User created successfully',
            data: user 
            });
  }



  static login(req, res)
  {
    const{user, token} = req;
    try
    {
      return res.status(200).json({
        message:'User successfully logged in',
      data: {user, token},
      status: 200
    })
      
    }
    catch(e) 
    { 
      return res.status(500).json({
      message: 'Please, input correct login details',
      error:'unknownerror',
    });
    }
  }

    // static verifyUser(req, res)
    // {
    //   const findUser = User.find(user => user.id === parseInt(req.params.useremail));
    //   if (findUser) {
    //     return res.status(200).json({
    //       status: 200,
    //       data: findUser
    //     });
    //   } else {
    //     return res.status(404).json({
    //       success: "false",
    //       message: "Loan does not exist"
    //     });
    //   }
    // }
    // }

 }

export default UserController;
