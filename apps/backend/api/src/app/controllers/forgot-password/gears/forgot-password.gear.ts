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

    generateLink() {
        const prefix = `http://${process.env.NODE_ENV == 'production' ? 'awread.vn' : 'localhost:4200'}/new-password`;

    }

    async send(email) {
        const user = await this.pgAddon.pgGetUserByEmail(email);
        const secret = `${user.userId}-${user.createdAt}`;
        console.log('secret', secret, email);
        const token = this.jwtokenAddon.hashToken(secret, user.userId);
        this.nodeMailerAddon.send();
    }
}