import { responseSuccess } from "../common/helpers/function.helper.js"
import { articleService } from "../services/article.service.js"


export const articleController = {
    async findAll(req, res, next) {
        const result = await articleService.findAll(req)
        const response = responseSuccess(result, "Get list article success");
        res.json(response) // res.status(201).json
    },
    async findOne(req, res, next) {
        const result = await articleService.findOne(req)
        const response = responseSuccess(result, "Get detail article success");
        res.json(response) // res.status(201).json
    },
    async delete(req, res, next) {
        const result = await articleService.delete(req)
        const response = responseSuccess(result, "Delete article success");
        res.json(response) // res.status(201).json
    }
}
