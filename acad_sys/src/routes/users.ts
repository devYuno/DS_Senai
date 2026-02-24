import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

interface user {
    id: number;
    name: string;
    email: string;
    type: string;
    active: boolean;
    createdAt: Date;
}

const users: user[] = []

router
    .get('/', (req, res) => {
        if (users === 0) {
            
        }
    })