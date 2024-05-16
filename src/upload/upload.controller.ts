import { Body, Controller, Post } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UseInterceptors } from '@nestjs/common';
import {
  FileInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express';
import { UploadedFile, UploadedFiles } from '@nestjs/common';
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
    console.log(Buffer.from(file.originalname, 'latin1').toString('utf8'));
    console.log(file);
    console.log(body);
    return 'ok';
  }

  @Post('files')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'files', maxCount: 10 }, // 假设你允许最多上传10个文件
      ],
      {
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
      },
    ),
  )
  uploadMultipleFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log(files, body);
    return 'ok2';
  }
}
