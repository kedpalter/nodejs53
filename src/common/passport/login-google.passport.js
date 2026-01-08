import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// var GoogleStrategy = require('passport-google-oauth20').Strategy;
import passport from 'passport';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../constant/app.constant.js';


// Phải chạy trước mọi API xử lý về Login Google
export const initGoogleStrategy = () => {
    passport.use(
        new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:3069/api/auth/google-callback"
        },
            function (accessToken, refreshToken, profile, cb) {
                // User.findOrCreate({ googleId: profile.id }, function (err, user) {
                //     return cb(err, user);
                // });

                // Thành công
                cb(null, `user`);

                // Thất bại
                cb(`err`, null);
            }
        ));
}

