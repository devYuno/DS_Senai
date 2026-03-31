import express, { Router } from 'express'
import AuthController from '../controllers/AuthController.ts';
import { validateLogin, validateUserRegister } from '../middlewares/authMiddleware.ts';

const route: Router = express.Router();

route.post('/register', validateUserRegister, AuthController.register)
route.post('/login', validateLogin, AuthController.login)

export default route;