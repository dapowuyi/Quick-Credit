
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
      //id: db.length + 1,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    };
      User.push(req.body);
           //const user = User.find(user => user === req.body);
           res.status(201).send({
            success: 'true',
            message: 'User created successfully', user});
          }
    
  static getAllLoan(req, res) {
        return res.status(200).send(Loans);
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

        static getLoanByStatus(req, res)  {
          const findLoan = Loans.find(loan => loan.status === req.body );
           
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
  
}

export default UserController;