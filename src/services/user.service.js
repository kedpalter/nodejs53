import cloudinary from "../common/cloudinary/init.cloudinary.js";
import { FOLDER_IMAGE } from "../common/constant/app.constant.js";
import { BadRequestException } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";
import fs from "fs"
import path from "path";

export const userService = {

    async avatarLocal(req) {
        // req.file is the `avatar` file
        // req.body will hold the text fields, if there were any
        console.log("file", req.file);
        console.log("body", req.body);

        if (!req.file) {
            throw new BadRequestException("Không có file")
        }

        await prisma.users.update({
            where: {
                id: req.user.id,
            },
            data: {
                avatar: req.file.filename
            }
        })

        // Đảm bảo 1 user - 1 avatar
        if (req.user.avatar) {
            // Xóa Local
            const oldPath = path.join(FOLDER_IMAGE, req.user.avatar) // Dùng hàm (thư viện) vì path sẽ cover được các hệ điều hành khác nhau (Window: \\ - macOS: //)
            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath)
            }

            // Cloud
            cloudinary.uploader.destroy(req.user.avatar);
        }
        return true;
    },
    async avatarCloud(req) {
        console.log("file", req.file);
        console.log("body", req.body);
        if (!req.file) {
            throw new BadRequestException("Không có file")
        }

        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream({
                    folder: FOLDER_IMAGE, // Custom quy định folder trên cloudinary nếu cần
                }, (error, uploadResult) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(uploadResult);
                })
                .end(req.file.buffer);
        });
        console.log("[CLOUDINARY] Upload result: ", uploadResult)
        await prisma.users.update({
            where: {
                id: req.user.id
            },
            data: {
                avatar: uploadResult.public_id
            }
        });
        // Đảm bảo 1 user - 1 avatar
        if (req.user.avatar) {
            // Cloud
            cloudinary.uploader.destroy(req.user.avatar);

            // Xóa Local
            const oldPath = path.join(FOLDER_IMAGE, req.user.avatar) // Dùng hàm (thư viện) vì path sẽ cover được các hệ điều hành khác nhau (Window: \\ - macOS: //)
            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath)
            }
            // Xóa cả local và cloud trong trường hợp ng dùng luân phiên upload Local và upload Cloud
        }

        return true;
    },

    // ---------------------------------
    async create(req) {
        return `This action create`;
    },

    async findAll(req) {
        return `This action returns all user`;
    },

    async findOne(req) {
        return `This action returns a id: ${req.params.id} user`;
    },

    async update(req) {
        return `This action updates a id: ${req.params.id} user`;
    },

    async remove(req) {
        return `This action removes a id: ${req.params.id} user`;
    }
};