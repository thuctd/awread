import { Injectable } from "@nestjs/common";
import { NodeMailerAddon } from "../addons";
import { JwtokenAddon } from "../addons/jwtoken.addon";
import { PgAddon } from "../addons/pg.addon";


@Injectable()
export class ForgotPasswordGear {
    constructor(
        private nodeMailerAddon: NodeMailerAddon,
        private pgAddon: PgAddon,
        private jwtokenAddon: JwtokenAddon,
    ) {

    }

    generateLink(token, userId) {
        return `${process.env.NODE_ENV == 'production' ? 'https://awread.vn' : 'http://localhost:4200'}/new-password;token=${token};userId=${userId}`;

    }

    buildContent(url) {
        return `
        `;
    }

    async send(email) {
        if (!email) return { message: 'no email', success: false };
        const user = await this.pgAddon.pgGetUserByEmail(email);
        if (!user) { return { message: 'user not found', success: false } }
        const secret = `${user.userId}-${(new Date(user.createdAt)).getTime()}`;
        const token = this.jwtokenAddon.hashToken(secret, user.userId);
        const generateLink = this.generateLink(token, user.userId);
        const content = `
        Bạn đã quên mật khẩu của mình phải không?
        Đừng lo lắng, hãy bấm vào link này để reset mật khẩu nha!
        ${generateLink}
        `;
        // console.log('secret', user, secret, email, token, generateLink, content);
        // console.log('zz', secret, user.userId, token);
        // console.log('encode', this.jwtokenAddon.verifyToken(secret, token));
        // return content;
        return {
            message: 'done',
            success: true,
            result: await this.nodeMailerAddon.send(content)
        }
    }

    async newPassword({ token, userId, password }) {

        const { message, success, payload, user } = await this.getPayload(token, userId);

        if (success == false) {
            return { message, success }
        }

        if (!payload['userId']) {
            return { message: 'token not valid, should renew', success: false };
        }
        if (payload['userId'] == user.userId) {
            // return { message: payload, matchUser: user };
            return {
                message: 'done',
                success: true,
                result: await this.pgAddon.createNewPassword(userId, password)
            }
        } else {
            return { message: 'token is not valid', success: false };
        }
    }

    async checkToken({ token, userId }) {
        const { message, success, payload } = await this.getPayload(token, userId);

        if (success == false) {
            return { message, success }
        }

        return {
            message: 'done',
            success: true,
            payload
        }

    }

    private async getPayload(token, userId) {
        if (!token || !userId)
            return {
                message: 'no token or userId or password',
                success: false
            };
        const user = await this.pgAddon.pgGetUserByUserId(userId);
        if (!user) {
            return {
                message: 'user not found',
                success: false
            }
        }
        const secret = `${user.userId}-${(new Date(user.createdAt)).getTime()}`;
        let payload;
        try {
            payload = this.jwtokenAddon.verifyToken(secret, token);
            return {
                message: 'done',
                success: true,
                payload, user
            };
        } catch (error) {
            return {
                message: 'token expired, should renew',
                success: false
            };
        }

    }
}