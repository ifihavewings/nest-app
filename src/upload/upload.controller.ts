import { Body, Controller, Post } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}
  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          cb(null, join(__dirname, '../../public/files')); // 指定文件存储的目录
        },
        filename: (req, file, cb) => {
          // 使用原始文件名（保留扩展名）并添加时间戳前缀
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, uniqueSuffix + extname(file.originalname));
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    // 配置 Multer 存储引擎
    console.log('=========file, body======');
    console.log(file);
    console.log(body);
    return 'ok';
  }
  uploadSingFile() {
    return 'ok';
  }

  @Post('files')
  uploadMultipleFiles() {}
}
