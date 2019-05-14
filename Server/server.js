import express from 'express';

import UserController from './src/controllers/controller';


const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Congratulations! Your first endpoint is working'});
})

app.get('/api/v1/users', UserController.listUsers);
app.get('/api/v1/loans', UserController.getAllLoan);
app.get('/api/v1/loans/id', UserController.getLoanById);
app.post('/api/auth/v1/signup', UserController.createUser);
app.get('/api/v1/loans?status=approved&repaid=true', UserController.getRepaidAndStatus);




app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;



     

                                     


