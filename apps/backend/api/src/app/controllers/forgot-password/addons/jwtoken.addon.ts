import { Injectable } from "@nestjs/common";
import jwt from "jsonwebtoken"

Injectable()
export class JwtokenAddon {

    constructor() {
    }

    hashToken(secret, userId) {
        const token = jwt.sign({
            userId,
            // exp: Math.floor(Date.now() / 1000) + (60 * 5),
        }, secret, {
            expiresIn: '5m' // 5 min
        })
        return token
    }

    verifyToken(secret, token) {
        return jwt.verify(token, secret);
    }

}