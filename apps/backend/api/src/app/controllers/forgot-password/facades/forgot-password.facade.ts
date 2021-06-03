import { Injectable } from "@nestjs/common";
import { ForgotPasswordGear } from "../gears";


@Injectable()
export class ForgotPasswordFacade {
    constructor(
        private forgotPasswordGear: ForgotPasswordGear,
    ) {

    }

    sendMail(email) {
        return this.forgotPasswordGear.send(email);
    }

    newPassword(param) {
        return this.forgotPasswordGear.newPassword(param);
    }

    checkToken(param) {
        return this.forgotPasswordGear.checkToken(param);
    }
}