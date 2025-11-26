
export const responseSuccess = (data, message = "ok", statusCode = 200) => {
    return {
        status: "success",
        statusCode: statusCode,
        message: message,
        data: data,
        doc: "example.com",
    }
}
