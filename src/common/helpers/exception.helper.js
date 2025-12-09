import { statusCodes } from "./status-code.helper.js"
// kế thừa class của Error


export class BadRequestException extends Error {
    constructor(message = 'BadRequestException') {
        super(message)
        this.code = statusCodes.BAD_REQUEST
    }
}
/**
 * 401: yêu cầu FE logout
 * ...: Nội bộ, quy ước chung với FE
 */
export class UnauthorizedException extends Error {
    constructor(message = 'UnauthorizedException') {
        super(message)
        this.code = statusCodes.UNAUTHORIZED
    }
}

/**
 * 403: FE yêu cầu làm mới accessToken
 */
export class ForBiddenException extends Error {
    constructor(message = 'ForBiddenException') {
        super(message)
        this.code = statusCodes.FORBIDDEN
    }
}

/**
 * 404: Không tìm thấy...
 */
export class NotFoundException extends Error {
    constructor(message = 'NotFoundException') {
        super(message)
        this.code = statusCodes.NOT_FOUND
    }
}
