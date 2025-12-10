import jsonwebtoken from "jsonwebtoken"

export const tokenService = {
    createTokens(userId) {
        const accessToken = jsonwebtoken.sign({ userId: userId }, "12345", { expiresIn: "1d" })
        // secret or Public key moved to .env

        return {
            accessToken: accessToken,
            refreshToken: "refreshToken"
        }
    },

    verifyAccessToken(accessToken) {
        const decode = jsonwebtoken.verify(accessToken, "12345")
        return decode
    }
}
