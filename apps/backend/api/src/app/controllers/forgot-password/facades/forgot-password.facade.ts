import { Injectable } from "@nestjs/common";
import { ForgotPasswordGear } from "../gears";


@Injectable()
export class ForgotPasswordFacade {
    constructor(
        private forgotPasswordGear: ForgotPasswordGear,
    ) {

    }

    sendMail() {
        this.forgotPasswordGear.send();
    }
}