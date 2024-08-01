import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({ description: 'The username of the user' })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value, { toClassOnly: true })
  username: string;

  @ApiProperty({ description: 'The password of the user' })
  @IsNotEmpty()
  @Length(6, 20)
  @Transform(({ value }) => value, { toClassOnly: true })
  password: string;

  @ApiProperty({ description: 'The phone number of the user' })
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value, { toClassOnly: true })
  phoneNumber: string;

  @ApiProperty({ description: 'The email of the user' })
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value, { toClassOnly: true })
  email: string;

  @ApiProperty({ description: 'The gender of the user', enum: ['male', 'female', 'other'] })
  @IsNotEmpty()
  @IsEnum(['male', 'female', 'other'])
  @Transform(({ value }) => value, { toClassOnly: true })
  gender: 'male' | 'female' | 'other';

  @ApiProperty({ description: 'The level of the user', default: 1 })
  @Transform(({ value }) => value, { toClassOnly: true })
  level?: number;

  @ApiProperty({ description: 'Is the user deactivated', default: false })
  @Transform(({ value }) => value, { toClassOnly: true })
  deactivated?: boolean;
}
