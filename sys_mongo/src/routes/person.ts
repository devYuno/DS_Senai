import express, { Router } from 'express';
import Person from '../models/Person.ts';
import personController from '../controllers/personController.ts';
import { validateRegister } from '../middlewares/personMiddleware.ts';

const router: Router = express.Router();

router
    .get('/', personController.getUsers)
    .get('/:id', personController.getUserById)
    .post('/register', validateRegister, personController.createUser)  // o validateRegister retorna erro se houver dados nulos, e passa para a proxima função se não houver.
    .put('/update/:id', personController.updateUser)
    .delete('/delete/:id', personController.deleteUser);

export default router;
