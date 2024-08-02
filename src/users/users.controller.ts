import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto'
import { PaginationDto } from '../pagination/dto/pagination.dto';
import { User } from './entities/user.entity';
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {

    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        const user = await this.usersService.create(createUserDto)
        return user;
    }
    @Get()
    async findAll(
        @Query() paginationDto: PaginationDto, // 分页参数 DTO
        @Query() searchOptions: Partial<Record<keyof User, any>> // 业务相关的搜索选项
    ): Promise<{ data: User[]; total: number }> {
        return await this.usersService.findAll(paginationDto, searchOptions);
    }
     @Patch()
    updateUser() {

    }
    @Delete()
    deleteUser() {

    }
    @Get(':id')
    getDetail() {

    }
}
