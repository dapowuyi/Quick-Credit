import express from 'express';
import bodyParser from 'body-parser';

import UserController from './src/controllers/controller';
import request from 'request';

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'Congratulations! Your first endpoint is working'});
})

app.get('/api/v1/users', UserController.listUsers);
app.get('/api/v1/loans', UserController.getAllLoan);
app.get('/api/v1/loans/id=2', UserController.getLoanById);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

export default app;



     

                                     


