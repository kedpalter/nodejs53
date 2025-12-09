import express from 'express'
import { articleController } from '../controllers/article.controller.js'
import { BadRequestException } from '../common/helpers/exception.helper.js';

export const articleRouter = express.Router()

articleRouter.get("/",
    (req, res, next) => {
        // console.log('mid 1');
        // req lưu địa chỉ ô nhớ, địa chỉ ô nhớ lưu obj → mặc dù ngoài scope nhưng biến trong req sẽ được truyền qua các scope tiếp theo sau đó


        // Trạng thái thành công: next()
        // Trạng thái thất bại: truyền tham số vào hàm next(err) |→ throw new Error()

        // Lỗi kiểm soát được
        // throw new Error('Wrong Password') // VD

        // Thực tế dùng class extend của Error được thiết lập trong exception
        // throw new BadRequestException("Wrong password")

        // Lỗi không kiểm soát được

        next()
    },
    (req, res, next) => {
        // console.log('mid 2');

        next()
    },
    (req, res, next) => {
        // console.log('mid 3');

        next();
    },
    // Middleware cuối để gom tất cả các lỗi có trong dự án
    // Chỉ được tồn tại 1 middleware đặc biệt, 4 tham số
    // appError (handle-error.helper.js)

    articleController.findAll
) // not findAll()
articleRouter.post("/", articleController.create)

// Đưa các router có :id xuống dưới, riêng, để tránh xung đột (conflict)
articleRouter.get("/:id", articleController.findOne)
articleRouter.put("/:id", articleController.update)
articleRouter.delete("/:id", articleController.delete)