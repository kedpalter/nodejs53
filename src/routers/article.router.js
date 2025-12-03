import express from 'express'
import { articleController } from '../controllers/article.controller.js'

export const articleRouter = express.Router()

articleRouter.get("/", articleController.findAll) // not findAll()
articleRouter.post("/", articleController.create)

// Đưa các router có :id xuống dưới, riêng, để tránh xung đột (conflict)
articleRouter.get("/:id", articleController.findOne)
articleRouter.put("/:id", articleController.update)
articleRouter.delete("/:id", articleController.delete)