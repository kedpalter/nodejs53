import express from 'express'
import { articleRouter } from './article.router.js';
import authRouter from './auth.router.js';
import userRouter from './user.router.js';

export const rootRouter = express.Router();

rootRouter.use('/article', articleRouter);
rootRouter.use('/auth', authRouter);
rootRouter.use('/user', userRouter);
