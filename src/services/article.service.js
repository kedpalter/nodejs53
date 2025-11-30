import { prisma } from "../common/prisma/connect.prisma.js";
import { Article } from "../models/article.model.js";

// DATABASE FIRST
// CODE FIRST

export const articleService = {
    /**
     * 
     * QUERY (Luôn luôn nhận dữ liệu dạng String)
     * API lấy danh sách bài viết
     * FE sẽ gửi dữ liệu thông qua QUERY
     * Nhận biết: Bắt đầu từ dấu "?", phân tcash với nhau bằng dấu "&"
     * Thường dùng: phân trang, lọc, tìm kiếm
     */

    // Logic
    async findAll(req) {
        console.log("query", req.query);


        // prisma
        const resPrisma = await prisma.articles.findMany()

        // sequelize
        const result = await Article.findAll()

        return resPrisma
    },
    /**
     * PATH PARAM
     * cách nhận biết :"/:id"
     * Thường dùng: lấy chi tiết (detail) 1 item
     */
    async findOne(req) {
        console.log("params", req.params);
        const { id } = req.params;

        const article = prisma.articles.findUnique({
            where: {
                id: Number(id),
            }
        })

        return article;
    },
    /**
     * HEADERS
     * Thường dùng: Để gửi Token (Bearer Token JWT), API-KEY,...
     */
    async delete(req) {
        console.log("params", req.params)
        const { id } = req.params;
        console.log("headers", req.headers);

        // Xóa thật trong DB - ko dùng khi đi làm
        // await prisma.articles.delete({
        //     where: {
        //         id: Number(id)
        //     }
        // })
        // Dùng Update trong DB thay vì Delete

        await prisma.articles.update({
            where: {
                id: +id,
            },
            data: {
                isDeleted: true,
            }
        })
        // → Xóa mềm, KHÔNG xóa thật trong DB
    }

}
