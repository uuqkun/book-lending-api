import { Router } from "express";
import bookController from "../controllers/bookController.js";

const publicRouter = new Router();

publicRouter.get('/api/books', bookController.list);

export { 
    publicRouter
}