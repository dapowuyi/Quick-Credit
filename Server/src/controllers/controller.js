
import Loans from '../models/db';
import User from '../models/db_user';
import repayment from '../models/db_repayment';
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
           });
        }
        return res.status(404).json({
        success: 'false',
        message: 'Loan does not exist'
        });
        }

        
}

export default UserController;