import express from 'express';
import { userController } from '../controllers/user.controller.js';
import { uploadDiskStorage } from '../common/multer/disk-storage.multer.js';
import { protect } from '../common/middleware/protect.middleware.js';
import { uploadMemory } from '../common/multer/memory.multer.js';

const userRouter = express.Router();

userRouter.post('/avatar-local', protect, uploadDiskStorage.single('avatar'), userController.avatarLocal);
userRouter.post('/avatar-cloud', protect, uploadMemory.single('avatar'), userController.avatarCloud);

// ---------------------------------
// Tạo route CRUD
userRouter.post('/', userController.create);
userRouter.get('/', userController.findAll);
userRouter.get('/:id', userController.findOne);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.remove);

export default userRouter;