import express from 'express'
import { articleRouter } from './article.router.js';
import authRouter from './auth.router.js';

export const rootRouter = express.Router();

rootRouter.use('/article', articleRouter);
rootRouter.use('/auth', authRouter);
