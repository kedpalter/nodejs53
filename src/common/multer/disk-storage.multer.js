import multer from 'multer';
import path from 'path';
import fs from "fs"
import { FOLDER_IMAGE } from '../constant/app.constant.js';

// Tạo folder images (lỡ đang ko có), rescursive true để nếu folder tồn tại rồi thì bỏ qua
fs.mkdirSync(FOLDER_IMAGE, { recursive: true })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, FOLDER_IMAGE)
    },
    filename: function (req, file, cb) {
        const extName = path.extname(file.originalname)

        // console.log({ file, extName })

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

        const fileName = "local" + '-' + uniqueSuffix + extName

        cb(null, fileName)
    }
})

export const uploadDiskStorage = multer({ storage: storage })
