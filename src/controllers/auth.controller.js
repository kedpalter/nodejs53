import { responseSuccess } from "../common/helpers/function.helper.js";
import { authService } from "../services/auth.service.js";

export const authController = {
    async register(req, res, next) {
      const result = await authService.register(req);
      const response = responseSuccess(result, `Register auth successfully`);
      res.status(response.statusCode).json(response);
   },
   
   async login(req, res, next) {
      const result = await authService.login(req);
      const response = responseSuccess(result, `Login auth successfully`);
      res.status(response.statusCode).json(response);
   },

   async getInfo(req, res, next) {
      const result = await authService.getInfo(req);
      const response = responseSuccess(result, `getInfo auth successfully`);
      res.status(response.statusCode).json(response);
   },



   
   // ------------------------------------------
   async findAll(req, res, next) {
      const result = await authService.findAll(req);
      const response = responseSuccess(result, `Get all auths successfully`);
      res.status(response.statusCode).json(response);
   },

   async findOne(req, res, next) {
      const result = await authService.findOne(req);
      const response = responseSuccess(result, `Get auth #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   async update(req, res, next) {
      const result = await authService.update(req);
      const response = responseSuccess(result, `Update auth #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   },

   async remove(req, res, next) {
      const result = await authService.remove(req);
      const response = responseSuccess(result, `Remove auth #${req.params.id} successfully`);
      res.status(response.statusCode).json(response);
   }
};