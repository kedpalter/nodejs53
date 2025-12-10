import express from 'express';
import { authController } from '../controllers/auth.controller.js';
import { protect } from '../common/middleware/protect.middleware.js';

const authRouter = express.Router();

// authRouter.use(protect) // Nếu muốn bảo vệ toàn bộ, hoặc gắn protect lên từng route muốn bảo vệ
authRouter.post('/register', authController.register);
authRouter.get('/login', authController.login);
authRouter.get('/get-info', protect, authController.getInfo)


// Tạo route CRUD
// authRouter.post('/', authController.create);
// authRouter.get('/', authController.findAll);
// authRouter.get('/:id', authController.findOne);
// authRouter.patch('/:id', authController.update);
// authRouter.delete('/:id', authController.remove);



export default authRouter;