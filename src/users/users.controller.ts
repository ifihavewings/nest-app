import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {UserDto} from './dto/user.dto'
@Controller('users')
export class UsersController {
    constructor( private usersService: UsersService) {

    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto):Promise<UserDto> {
        const user = await this.usersService.create(createUserDto)
        return user;
    }
    @Get()
    getUsers() {

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
