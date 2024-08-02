import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class UserDto {
  @ApiProperty({ description: 'The ID of the user' })
  id: number;

  @ApiProperty({ description: 'The username of the user' })
  username: string;

  @ApiProperty({ description: 'The phone number of the user' })
  phoneNumber: string;

  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @ApiProperty({ description: 'The gender of the user', enum: ['male', 'female', 'other'] })
  gender: 'male' | 'female' | 'other';

  @ApiProperty({ description: 'The level of the user', default: 1 })
  level: number;

  @ApiProperty({ description: 'Is the user deactivated', default: false })
  deactivated: boolean;

  constructor(user: User) {
    this.id = user.id;
    this.username = user.username;
    this.phoneNumber = user.phoneNumber;
    this.email = user.email;
    this.gender = user.gender;
    this.level = user.level;
    this.deactivated = user.deactivated;
  }
}
