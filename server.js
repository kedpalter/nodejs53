// Module type: edit key "type" in pakage.js
// const express = require("express") // commonjs (old)
import express from "express" // module (new)
import { rootRouter } from "./src/routers/root.router.js";

rootRouter

const app = express();

app.use('/api', rootRouter)

app.get("/hello", (req, res, next) => {
    
    res.json({
        message: "Hello World !"
    });

});

const port = 3069;
app.listen(port, () => {
    console.log('Server online at:', port)
})

// prisma sẽ vô DB lấy thông tin cấu trúc của các table và tạo ra schema(model) bên trong code
// npx prisma db pull

// tạo ra object(prisma-client) để chấm ra tất cả table và sử dụng lấy dữ liệu
// npx prisma generate