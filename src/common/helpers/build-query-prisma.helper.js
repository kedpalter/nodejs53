export const buildQueryPrisma = (query) => {
    let { page, pageSize, filters } = query;

    const pageDefault = 1;
    const pageSizeDefault = 3;

    // Đảm bảo là số và ko gửi chữ
    page = Number(page) || pageDefault;
    pageSize = Number(pageSize) || pageSizeDefault;

    // Nếu gửi số âm
    page = Math.max(page, pageDefault);
    pageSize = Math.max(pageSize, pageSizeDefault);

    try {
        filters = JSON.parse(filters)
    } catch (error) {
        console.log("Wrong JSON format!")
        filters = {};
    }

    // Xử lý filters
    for (const [key, value] of Object.entries(filters)) {
        if (typeof value === "string") {
            console.log(` key ${key} có giá trị là string: `, value);
            filters[key] = {
                contains: value,
            };
        }
    }

    const index = (page - 1) * pageSize
    console.log("query", { page, pageSize, index, filters });

    const where = {
        ...filters,
        isDeleted: false,
    }
    return {
        page,
        pageSize,
        where,
        index
    }
}