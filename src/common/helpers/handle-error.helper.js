import { responseError } from "./function.helper.js"

/**
 * Để ở cuối để gom tất cả các lỗi có trong dự án
 */
export const appError = (err, req, res, next) => {
    console.log('middleware đặc biệt, bắt lỗi:', err)

    const response = responseError(err?.message, 400, err?.stack) // Thêm dấu ? để đảm bảo nếu có mới chạy, ko trắng trang vì đây là nơi gom lỗi cuối cùng
    
    res.status(response.statusCode).json(response)
}