import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadCoverController } from './controllers/upload-cover/upload-cover.controller';
import { UploadCoverService } from './controllers/upload-cover/upload-cover.service';
@Module({
  imports: [],
  controllers: [AppController, UploadCoverController],
  providers: [AppService, UploadCoverService],
})
export class AppModule { }
