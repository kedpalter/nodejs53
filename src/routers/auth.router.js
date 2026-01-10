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

// Sau khi ng dùng chọn tài khoản và đồng ý với bên GG, passport sẽ lấy code và xử lý với bên google → lấy thông tin gmail → kích hoạt hàm verify ở trong src/common/passport/login-google.passport.js
authRouter.get('/google-callback', passport.authenticate("google", { failureRedirect: "/login", session: false }), authController.googleCallback)


authRouter.post('/refresh-token', authController.refreshToken)
// Tạo route CRUD
// authRouter.post('/', authController.create);
// authRouter.get('/', authController.findAll);
// authRouter.get('/:id', authController.findOne);
// authRouter.patch('/:id', authController.update);
// authRouter.delete('/:id', authController.remove);



export default authRouter;