import express from 'express'
import { articleController } from '../controllers/article.controller.js'

export const articleRouter = express.Router()

articleRouter.get('/', articleController.findAll) // not findAll()
articleRouter.get("/:id", articleController.findOne)
articleRouter.delete("/:id", articleController.delete)