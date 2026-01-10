import { responseSuccess } from "../common/helpers/function.helper.js";
import { userService } from "../services/user.service.js";

export const userController = {

    async avatarLocal(req, res, next) {
        const result = await userService.avatarLocal(req);
        const response = responseSuccess(result, `avatarLocal user successfully`);
        res.status(response.statusCode).json(response);
    },

    async avatarCloud(req, res, next) {
        const result = await userService.avatarCloud(req);
        const response = responseSuccess(result, `avatarCloud user successfully`);
        res.status(response.statusCode).json(response);
    },
    // ---------------------------------
    async create(req, res, next) {
        const result = await userService.create(req);
        const response = responseSuccess(result, `Create user successfully`);
        res.status(response.statusCode).json(response);
    },

    async findAll(req, res, next) {
        const result = await userService.findAll(req);
        const response = responseSuccess(result, `Get all users successfully`);
        res.status(response.statusCode).json(response);
    },

    async findOne(req, res, next) {
        const result = await userService.findOne(req);
        const response = responseSuccess(result, `Get user #${req.params.id} successfully`);
        res.status(response.statusCode).json(response);
    },

    async update(req, res, next) {
        const result = await userService.update(req);
        const response = responseSuccess(result, `Update user #${req.params.id} successfully`);
        res.status(response.statusCode).json(response);
    },

    async remove(req, res, next) {
        const result = await userService.remove(req);
        const response = responseSuccess(result, `Remove user #${req.params.id} successfully`);
        res.status(response.statusCode).json(response);
    }
};