import express from 'express';
import { publicRouter } from '../routes/public-api.js';
import { adminRouter } from '../routes/api.js';
import { errorMiddleware } from '../middlewares/errorMiddleware.js';

export const web = express();

// Middlewares
web.use(express.json());
web.use(publicRouter);
web.use(adminRouter);
web.use(errorMiddleware);