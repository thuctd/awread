import { Injectable } from "@nestjs/common";
import jwt from "jsonwebtoken"

Injectable()
export class JwtokenAddon {

    constructor() {
    }

    hashToken(secret, userId) {
        const token = jwt.sign({ userId }, secret, {
            // expiresIn: 3600 // 1 hour
            expiresIn: 300 // 5 mins
        })
        return token
    }

    decodeToken(secret, token) {
        return jwt.decode(token, secret);
    }

}