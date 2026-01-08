import { responseError } from "./function.helper.js"
import jwt from "jsonwebtoken"
import { statusCodes } from "./status-code.helper.js"

/**
 * Để ở cuối để gom tất cả các lỗi có trong dự án
 */
export const appError = (err, req, res, next) => {
    console.log('middleware đặc biệt, bắt lỗi:', err)

    if (err instanceof jwt.JsonWebTokenError) {
        err.code = statusCodes.UNAUTHORIZED     // 401 → FE Logout User
    }
    if (err instanceof jwt.TokenExpiredError) {
        err.code = statusCodes.FORBIDDEN        // 403 → FE gọi API POST: api/auth/refresh-token
    }

    const response = responseError(err?.message, err.code, err?.stack) // Thêm dấu ? để đảm bảo nếu có mới chạy, ko trắng trang vì đây là nơi gom lỗi cuối cùng

    res.status(response.statusCode).json(response)
}