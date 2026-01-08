// Module type: edit key "type" in pakage.js
// const express = require("express") // commonjs (old)
import express from "express" // module (new)
import { rootRouter } from "./src/routers/root.router.js";
import cors from "cors"
import { appError } from "./src/common/helpers/handle-error.helper.js";
import { NotFoundException } from "./src/common/helpers/exception.helper.js";
import { initGoogleStrategy } from "./src/common/passport/login-google.passport.js";

rootRouter

const app = express();

app.use(express.json()) // Để trước router để express tự động chuyển file JSON body
app.use(cors({
    origin: ["http://localhost:3000", "https://www.google.com"]
}))

initGoogleStrategy() // Chạy trước Strategy

app.use('/api', rootRouter)

// Xử lý khi có req từ bên ngoài ko đúng với route
app.use((req, res, next) => {
    const method = req.method;
    const url= req.originalUrl;
    const ip = req.ip;
    console.log(method, url, ip)

    throw new NotFoundException();
}) 
app.use(appError)

const port = 3069;
app.listen(port, () => {
    console.log('Server online at:', port)
})

// prisma sẽ vô DB lấy thông tin cấu trúc của các table và tạo ra schema(model) bên trong code
// npx prisma db pull

// tạo ra object(prisma-client) để chấm ra tất cả table và sử dụng lấy dữ liệu
// npx prisma generate