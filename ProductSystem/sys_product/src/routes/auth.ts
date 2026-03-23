import express, { Router } from 'express'
import AuthController from '../controllers/AuthController.ts';

const route: Router = express.Router();

route.post('/register', AuthController.register)
route.post('/login', AuthController.login)

export default route;