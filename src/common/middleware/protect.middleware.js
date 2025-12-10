import { tokenService } from "../../services/token.service.js";
import { UnauthorizedException } from "../helpers/exception.helper.js";
import { prisma } from "../prisma/connect.prisma.js";

export const protect = async (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) {
        throw new UnauthorizedException("Unauthorized")
    }

    const [type, token] = authorization.split(' ')
    if (type !== "Bearer") {
        throw new UnauthorizedException("Token is not Bearer type")
    }
    if (!token) {
        throw new UnauthorizedException("Token not found")
    }

    const { userId } = tokenService.verifyAccessToken(token);

    const userExist = await prisma.users.findUnique({
        where: {
            id: userId
        }
    })
    if(!userExist) {
        throw new UnauthorizedException("User not found")
    }

    console.log({ authorization, type, token, userId, userExist })


    console.log('mid protect');
    next()
}