import { Body, Controller, Get, Param } from '@nestjs/common';
import { Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadCoverFacade } from './facades';

@Controller('upload-cover')
export class UploadCoverController {
  constructor(
    private uploadCoverFacade: UploadCoverFacade
  ) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file, @Body() uploadInfo) {
    // console.log('file', file);
    // console.log('uploadInfo', uploadInfo);
    return await this.uploadCoverFacade.upload(file, uploadInfo);
  }
}
