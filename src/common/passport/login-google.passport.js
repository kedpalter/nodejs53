import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
import passport from 'passport';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../constant/app.constant.js';
import { BadRequestException } from '../helpers/exception.helper.js';
import { prisma } from '../prisma/connect.prisma.js';


// Phải chạy trước mọi API xử lý về Login Google
export const initGoogleStrategy = () => {
    passport.use(
        new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3069/api/auth/google-callback"
        },
            async function (accessToken, refreshToken, profile, cb) {
                // User.findOrCreate({ googleId: profile.id }, function (err, user) {
                //     return cb(err, user);
                // });

                // console.dir({ accessToken, refreshToken, profile }, { colors: true, depth: null })

                const email = profile.emails[0].value;
                const isVerify = profile.emails[0].verified;
                const fullName = profile.displayName;
                const googleId = profile.id;
                const avatar = profile.photos[0].value;

                // console.log({ email, isVerify, fullName, googleId, avatar })

                if (!isVerify) {
                    // Thất bại
                    cb(new BadRequestException("Email is not verified"), null);
                    return;
                }

                const userExist = await prisma.users.findUnique({
                    where: {
                        email: email
                    }
                })

                // Nếu chưa có tài khoản → Tạo mới. Sẽ luôn cho người dùng đăng nhập vì bên phía google đã hỗ trợ xác thực
                if (!userExist) {
                    await prisma.users.create({
                        data: {
                            email: email,
                            googleId: googleId,
                            avatar: avatar,
                            fullName: fullName,
                        }
                    })
                }

                // Nếu code chạy tới đây thì đã đảm bảo userExist luôn có dữ liệu

                // Thành công
                // Tham số thứ 2 sẽ được gắn vào key "user" của obj req
                cb(null, userExist);



            }
        ));
}

