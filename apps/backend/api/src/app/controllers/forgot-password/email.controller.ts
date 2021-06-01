import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ForgotPasswordFacade } from './facades';
@Controller('email')
export class EmailController {
    constructor(
        private ForgotPasswordFacade: ForgotPasswordFacade
    ) {
    }

    @Get()
    async forgotPassword(@Req() request: Request) {
        return await this.ForgotPasswordFacade.sendMail();
    }
}
