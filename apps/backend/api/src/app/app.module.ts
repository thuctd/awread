import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadCoverController } from './controllers/upload-cover/upload-cover.controller';
import { SharpAddon, S3Addon } from './controllers/upload-cover/addons';
import { UploadCoverGear } from './controllers/upload-cover/gears';
import { UploadCoverFacade } from './controllers/upload-cover/facades';
import { NodeMailerAddon } from './controllers/forgot-password/addons';
import { ForgotPasswordGear } from './controllers/forgot-password/gears';
import { ForgotPasswordFacade } from './controllers/forgot-password/facades';
import { PgAddon } from './controllers/forgot-password/addons/pg.addon';
import { JwtokenAddon } from './controllers/forgot-password/addons/jwtoken.addon';
import { ForgotPasswordController } from './controllers/forgot-password/forgot-password.controller';
@Module({
  imports: [],
  controllers: [AppController, UploadCoverController, ForgotPasswordController],
  providers: [AppService, SharpAddon, S3Addon, UploadCoverGear, UploadCoverFacade, NodeMailerAddon, ForgotPasswordGear, ForgotPasswordFacade, PgAddon, JwtokenAddon],
})
export class AppModule { }
