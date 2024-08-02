import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>,) {

    }
    async create(createUserDto: CreateUserDto): Promise<UserDto> {
        return await this.userRepository.manager.transaction(async (manager: EntityManager) => {
            // 将 DTO 中的数据映射到实体的字段，并返回一个新的实体实例
            const user = manager.create(User, createUserDto);
            return await manager.save(user);
        });
      }
}
