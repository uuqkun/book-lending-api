import express from 'express';

export const web = express();

// Middlewares
web.use(express.json());