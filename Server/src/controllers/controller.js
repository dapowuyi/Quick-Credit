
import Loans from '../models/db';
import User from '../models/db_user';


class UserController {
    
    static listUsers(req, res) {
          return res.status(200).send(User);
          } 

    static createUser(req, res) {
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
        
            else if (!req.body.password) {
              return res.status(400).send({
                success: 'false',
                message: 'Please, provide password.'
              });
            }
        
            const status = 'unverified';
            const isAdmin = false;
            // const token = Auth.generateToken({id, firstname, lastname});
            const createdOn = new Date().toLocaleString();

            const user = {
              token: "45erkjherh45495783",
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
                  res.status(201).send({
                  message: 'User created successfully',
                  data: user 
                  });
        }
    
   
    static getAllLoan(req, res) {
        try
          {
        
            return res.status(200).send(Loans)({
            message: 'Loans retreived successfully',
            status: 200,
            data : Loans
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
          const findLoan = Loans.find(loan => loan.id === parseInt(req.params.id));   
          if (findLoan) 
          {
            return res.status(200).json({
              status:200,
              data: findLoan,
            });
          }
          return res.status(404).json({
          success: 'false',
          message: 'Loan does not exist'
          });
          }

  static getRepaidAndStatus(req, res)  {
          let {status, repaid} = req.query
         // repaid = JSON.parse(repaid);
          const data = Loans.filter(loan => loan.status === status && loan.repaid === repaid);
          if(data)
          {
              return res.status(200).json({
              status:200,
              message: 'Loans retrieved successfully',
              data
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




  