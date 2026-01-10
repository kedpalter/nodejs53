import { BadRequestException, UnauthorizedException } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"
import { tokenService } from "./token.service.js";

export const authService = {
    async register(req) {
        const { email, password, fullName } = req.body;

        const userExist = await prisma.users.findUnique({
            where: {
                email: email,
            }
        });

        // Kiểm tra nếu người dùng đã tồn tại, trả lỗi 400 => không cho đăng ký
        if (userExist) {
            throw new BadRequestException("Người dùng đã tồn tại, vui lòng đăng nhập")
        }
        // HASH - băm password
        // Bcrypt - băm pass chỉ sử dụng CPU
        // Mã hóa 1 chiều - không dịch ngược được
        // Brute force = tấn công bằng cách tự mò → so sánh các băm
        const hashPassword = bcrypt.hashSync(password, 10)

        const newUser = await prisma.users.create({
            data: {
                email: email,
                password: hashPassword,
                fullName: fullName
            },
        })

        console.log({ email, password })
        return true;
    },

    async login(req) {
        const { email, password } = req.body;
        // Kiểm tra email người dùng có tồn tại chưa? Nếu có, đi tiếp, nếu không, chuyển qua đăng ký
        const userExist = await prisma.users.findUnique({
            where: {
                email: email,
            }
        })

        if (!userExist) {
            // throw new BadRequestException("Vui lòng đăng ký trước khi đăng nhập") → Không ghi cụ thể
            throw new BadRequestException("Account Invalid")
        }

        // Kiểm tra password
        const isPassword = bcrypt.compareSync(password, userExist.password);
        if (!isPassword) {
            // throw new BadRequestException("Mật khẩu không chính xác")
            throw new BadRequestException("Account Invalid")
        }

        // Encrypt: mã hóa
        // token cần: mã hóa 2 chiều, có thể dịch ngược được
        const tokens = tokenService.createTokens(userExist.id)

        console.log({ email, password, userExist })

        return tokens;
    },

    async getInfo(req) {

        console.log("get info service", req.user)
        // delete req.user.password
        return req.user
    },

    async googleCallback(req) {
        console.log("user google", req.user);

        const { accessToken, refreshToken } = tokenService.createTokens(req.user.id);
        // console.log({ accessToken, refreshToken })

        // truyền AT và RT trong query url của FE
        // FE dùng hook useSearchParam() để lấy AT và RT
        const urlRedirect = `http://localhost:3000/login-callback?accessToken=${accessToken}&refreshToken=${refreshToken}`;
        return urlRedirect
    },
    
    async refreshToken(req) {
        const { accessToken, refreshToken } = req.body;

        // Lúc này accessToken đang bị hết hạn nên ko thể verify → bị conflict → verify ignore hết hạn
        const decodeAccessToken = tokenService.verifyAccessToken(accessToken, { ignoreExpiration: true }) // Gắn option ở đây thay vì trong hàm vì chỉ có chỗ này mới bỏ qua "kiểm tra hết hạn"
        const decodeRefreshToken = tokenService.verifyRefreshToken(refreshToken)

        if (decodeAccessToken.userId !== decodeRefreshToken.userId) {
            throw new UnauthorizedException("Refresh Token Invalid");
        }

        const userExist = await prisma.users.findUnique({
            where: {
                id: decodeAccessToken.userId,
            }
        });
        if (!userExist) {
            throw new UnauthorizedException("Không có người dùng")
        }

        // Trường hợp trả 1 cặp 2 token, refreshToken sẽ được làm mới (rotate) → Chỉ cần trong 1 ngày người dùng không đăng nhập sẽ bị log out
        const tokens = tokenService.createTokens(userExist.id)

        // Trường hợp trả 1 token (accessToken). refreshToken không được làm mới: Thời gian giữ đăng nhập sẽ tùy thuộc vào thời gian sống của refreshToken


        console.log({ accessToken, refreshToken })
        return "hello"
    },

    async create(req) {
        return `This action create`;
    },


    // ------------------------------------------
    async findAll(req) {
        return `This action returns all auth`;
    },

    async findOne(req) {
        return `This action returns a id: ${req.params.id} auth`;
    },

    async update(req) {
        return `This action updates a id: ${req.params.id} auth`;
    },

    async remove(req) {
        return `This action removes a id: ${req.params.id} auth`;
    }
};