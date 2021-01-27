import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadCoverController } from './controllers/upload-cover/upload-cover.controller';
import { SharpAddon, S3Addon } from './controllers/upload-cover/addons';
import { UploadCoverGear } from './controllers/upload-cover/gears';
import { UploadCoverFacade } from './controllers/upload-cover/facades';
@Module({
  imports: [],
  controllers: [AppController, UploadCoverController],
  providers: [AppService, SharpAddon, S3Addon, UploadCoverGear, UploadCoverFacade],
})
export class AppModule { }
