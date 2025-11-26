import { Article } from "../models/article.model.js";

// DATABASE FIRST
// CODE FIRST

export const articleService = {
    // Logic
    async findAll() {
        const result = await Article.findAll()
        // sequelize

        return result;
    }
}
