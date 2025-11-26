import express from 'express'
import { articleController } from '../controllers/article.controller.js'

export const articleRouter = express.Router()

articleRouter.get('/get-list-article', articleController.findAll) // not findAll()
