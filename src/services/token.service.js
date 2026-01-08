import jsonwebtoken from "jsonwebtoken"
import { ACCESS_TOKEN_SECRET } from "../common/constant/app.constant.js"

export const tokenService = {
    createTokens(userId) {
        const accessToken = jsonwebtoken.sign({ userId: userId }, ACCESS_TOKEN_SECRET, { expiresIn: "1d" })
        // secret or Public key moved to .env

        return {
            accessToken: accessToken,
            refreshToken: "refreshToken"
        }
    },

    verifyAccessToken(accessToken) {
        const decode = jsonwebtoken.verify(accessToken, ACCESS_TOKEN_SECRET)
        return decode
    }
}
