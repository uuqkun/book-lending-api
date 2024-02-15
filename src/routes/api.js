import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import bookController from "../controllers/bookController.js";

const adminRouter = new Router();
adminRouter.use(authMiddleware);

// Book API
adminRouter.post('/api/books', bookController.create);
adminRouter.patch('/api/books/:bookId', bookController.update);

export {
    adminRouter
}