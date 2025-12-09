import { BadRequestException } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";

export const authService = {
    async register(req) {
        const { email, password, fullName } = req.body;

        const userExist = await prisma.users.findUnique({
            where: {
                email: email,
            }
        });

        // Kiểm tra nếu người dùng đã tồn tại, trả lỗi 400 => không cho đăng ký
        if(userExist) {
            throw new BadRequestException("Người dùng đã tồn tại, vui lòng đăng nhập")
        }

        const newUser = await prisma.users.create({
            data: {
                email: email,
                password: password,
                fullName: fullName
            },
        })

        console.log({ email, password })
        return true;
    },

    async login(req) {
        return `This action login`;
    },

    async create(req) {
        return `This action create`;
    },

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