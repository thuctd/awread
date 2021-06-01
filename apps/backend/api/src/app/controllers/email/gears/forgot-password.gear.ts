import { Injectable } from "@nestjs/common";
import { NodeMailerAddon } from "../addons";


@Injectable()
export class ForgotPasswordGear {
    constructor(
        private nodeMailerAddon: NodeMailerAddon,
    ) {

    }

    send() {
        this.nodeMailerAddon.send();
    }
}