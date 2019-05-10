
import Loans from '../models/db';
import User from '../models/db_user';
import repayment from '../models/db_repayment';
class UserController {
    
  static listUsers(req, res) {
          return res.status(200).send(User);
          } 
    
  static createUser(req, res) {
    if (!req.body.firstname && !req.body.lastname) {
      return res.status(400).send({
        success: 'false',
        message: 'firstname and lastname are required'
      });
    } else if (!req.body.email) {
      return res.status(400).send({
        success: 'false',
        message: 'email is required'
      });
    }

    else if (!req.body.password) {
      return res.status(400).send({
        success: 'false',
        message: 'please input password.'
      });
    }

    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    };
      User.push(req.body);
           res.status(201).send({
            success: 'true',
            message: 'User created successfully', user,
            data: req.body,
            status: 201
          });
   }
    
  /*static getAllLoan(req, res) {
        return res.status(200).send(Loans);
      } */

      static getAllLoan(req, res) {
        try
        {
         //let data = res;
          //if(data.length = 0){     
           // return nullResponse(req, res);
        // }
        return res.status(200).send(Loans)({
          message: 'Loans retreived successfully',
          data : [req.body],
          status: 200
        });
        }
            
        catch(e){
            return res.status(500).json({
              message: 'No loans found',
              error:'unknownerror'
          });
        }
      }
    
  static getLoanById(req, res)  {
        const findLoan = Loans.find(loan => loan.id === parseInt(req.params.id, 10));   
        if (findLoan) 
        {
           return res.status(200).json({
              success: 'true',
              message: 'Loan retrieved successfully',
           });
        }
        return res.status(404).json({
        success: 'false',
        message: 'Loan does not exist'
        });
        }

        /*static getRepaidAndStatus(req, res)  {
          const loan = {req.query.status, req.query.repaid} = req.query;
          
          if(req.query.status === "approved" && req.query.repaid === true ) 
          {
              return res.status(200).json({
              message: 'Loans retrieved successfully',
              data: req.query,
              status:200
          });
            }
        return res.status(404).json({
        message: 'There are no loans meeting such criteria',
        error: "Not found"
        });
      }*/


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
              return res.status(401).json({
              message: 'Please, input correct login details',
              error:'unknownerror',
            });
            }
          }
          
}

export default UserController;