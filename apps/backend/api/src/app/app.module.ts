import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadCoverController } from './controllers/upload-cover/upload-cover.controller';
import { SharpAddon, S3Addon } from './controllers/upload-cover/addons';
import { UploadCoverGear } from './controllers/upload-cover/gears';
import { UploadCoverFacade } from './controllers/upload-cover/facades';
import { EmailController } from './controllers/email/email.controller';
import { NodeMailerAddon } from './controllers/email/addons';
import { ForgotPasswordGear } from './controllers/email/gears';
import { ForgotPasswordFacade } from './controllers/email/facades';
@Module({
  imports: [],
  controllers: [AppController, UploadCoverController, EmailController],
  providers: [AppService, SharpAddon, S3Addon, UploadCoverGear, UploadCoverFacade, NodeMailerAddon, ForgotPasswordGear, ForgotPasswordFacade],
})
export class AppModule { }
