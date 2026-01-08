import express from 'express';
import { authController } from '../controllers/auth.controller.js';
import { protect } from '../common/middleware/protect.middleware.js';
import passport from 'passport';

const authRouter = express.Router();

// authRouter.use(protect) // Nếu muốn bảo vệ toàn bộ, hoặc gắn protect lên từng route muốn bảo vệ
authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);
authRouter.get('/get-info', protect, authController.getInfo)
// Người dùng click button Đăng nhập Google, kích hoạt logic của passport, để passport xử lý với google, cùng với yêu cầu tôi muốn lấy email, profile. Sau khi passport làm việc với GG xong, passport sẽ tự redirect tới trang đăng nhập GG
authRouter.get('/google', passport.authenticate("google", { scope: ["email", "profile"] }))
authRouter.get('/google-callback', (req, res) => { res.json("Hello zuizui") })

// Tạo route CRUD
// authRouter.post('/', authController.create);
// authRouter.get('/', authController.findAll);
// authRouter.get('/:id', authController.findOne);
// authRouter.patch('/:id', authController.update);
// authRouter.delete('/:id', authController.remove);



export default authRouter;