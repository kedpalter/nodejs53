import { buildQueryPrisma } from "../common/helpers/build-query-prisma.helper.js";
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

        const { page, pageSize, where, index } = buildQueryPrisma(req.query)

        //===========================================================================
        // prisma
        const resPrismaPromise = prisma.articles.findMany({
            where: where,
            skip: index, // skip tới vị trí index nào (OFFSET)
            take: +pageSize, // take lấy bao nhiêu phần tử (LIMIT)
        });
        const totalItemsPromise = prisma.articles.count({
            where: where,
        })

        const [resPrisma, totalItems] = await Promise.all([resPrismaPromise, totalItemsPromise])

        // sequelize
        // const result = await Article.findAll()

        return {
            page: page,
            pageSize: pageSize,
            totalItems: totalItems,
            totalPage: Math.ceil(totalItems / pageSize),
            items: resPrisma
        }
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
                id: +id,
                isDeleted: false,
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
    },
    async create(req) {
        console.log("body", req.body)

        const { title, content } = req.body

        const articleNew = await prisma.articles.create({
            data: {
                title: title,
                content: content,
                userId: 1
            },
        })

        return articleNew
    },
    async update(req) {
        const { id } = req.params;
        const { title, content } = req.body;

        const articleUpdate = prisma.articles.update({
            where: {
                id: +id
            },
            data: {
                content: content,
                title: title
            }
        })

        return articleUpdate
    }

}
