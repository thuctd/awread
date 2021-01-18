import { Controller, Get } from '@nestjs/common';
import { Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadCoverService } from './upload-cover.service';

@Controller('upload-cover')
export class UploadCoverController {
    // @Post()
    // create(): string {
    //     return 'This action adds a new cat';
    // }

    // @Get()
    // findAll(): string {
    //     return 'This action returns all cats';
    // }


    constructor(
        private uploadCoverService: UploadCoverService
    ) {

    }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFile() file) {
        console.log('file', file);
        return await this.uploadCoverService.upload(file);
    }
}