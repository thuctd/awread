import { Body, Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ForgotPasswordFacade } from './facades';
@Controller('forgot-password')
export class ForgotPasswordController {
    constructor(
        private ForgotPasswordFacade: ForgotPasswordFacade
    ) {
    }

    @Get('send-email')
    async forgotPassword(@Query() query) {
        console.log('query', query);
        return await this.ForgotPasswordFacade.sendMail(query.email);
    }

    @Post('new-password')
    async verifyEmail(@Body() body) {
        console.log('body', body);
        return await this.ForgotPasswordFacade.newPassword(body);
    }

    @Post('check-token')
    async checkToken(@Body() body) {
        console.log('body', body);
        return await this.ForgotPasswordFacade.checkToken(body);
    }
}
