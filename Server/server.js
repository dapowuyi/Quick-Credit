import express from 'express';


import LoanController from './src/controllers/loanController'
import UserController from './src/controllers/userController'

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Congratulations! Your first endpoint is working'});
})

app.get('/api/v1/users', UserController.listUsers);
app.get('/api/v1/loans', LoanController.getAllLoan);
app.get('/api/v1/loans/:id', LoanController.getLoanById);
app.post('/api/auth/v1/signup', UserController.createUser);
app.post('/api/auth/v1/signin', UserController.login);






app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;



     

                                     


