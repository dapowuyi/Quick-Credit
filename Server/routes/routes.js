//import { Router } from 'express';
import UserController from '../controllers/controller.js';

const routes = (app =>{
    app.get('/api/v1/users', UserController.listUsers);
    app.post('/api/auth/v1/signup', UserController.createUser);
});


export default routes;