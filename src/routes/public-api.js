import { Router } from "express";
import bookController from "../controllers/bookController.js";
import userController from "../controllers/userController.js";

const publicRouter = new Router();

// Book API
publicRouter.get('/api/books', bookController.list);

// User API 
publicRouter.post('/api/users/register', userController.register);


export { 
    publicRouter
}