
export const responseSuccess = (data, message = "ok", statusCode = 200) => {
    return {
        status: "success",
        statusCode: statusCode,
        message: message,
        data: data,
        doc: "example.com",
    }
}

export const responseError = (message = "Interval Server Error", statusCode = 500, stack = null) => {
    return {
        status: "error",
        statusCode: statusCode,
        "message": message,
        stack: stack,
        doc: "nguyentandat.vn"
    }
}
