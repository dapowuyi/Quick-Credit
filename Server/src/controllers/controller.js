
import Loans from '../models/db';
import User from '../models/db_user';
import repayment from '../models/db_repayment';
import AuthMiddleWare from '../controllers/auth';
import uuid from 'uuid';

class UserController {
    
  static listUsers(req, res) {
          return res.status(200).send(User);
          } 
    
   
  static getAllLoan(req, res) {
    try
    {
     
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
              data: req.params.id,
              status:200
           });
        }
        return res.status(404).json({
        success: 'false',
        message: 'Loan does not exist'
        });
        }

       static getRepaidAndStatus(req, res)  {
          const {status, repaid} = req.query
          if(status === "approved" && repaid === true ) 
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
  
  }


export default UserController;




  