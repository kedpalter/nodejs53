import express from 'express'
import { articleRouter } from './article.router.js';

export const rootRouter = express.Router();

rootRouter.use('/article', articleRouter)
