import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findAll( @Req() req: any ): Promise<User> {
        return await this.userService.getOne({
            name: req.headers.authorization.replace('Token ', ''),
        });
    }

    @Post()
    async addUser( @Body() user: any ): Promise<any> {
        return await this.userService.create(user);
    }

    @Put()
    async update( @Body() user: any ): Promise<any> {
        return await this.userService.create(user);
    }

    @Post('login')
    async login( @Body() user: any ): Promise<any> {
        return await this.userService.getOne(user);
    }

    @Post(':userId/addBook')
    async addToUser(@Param('userId') userId: string, @Body() book: any ): Promise<any> {
        return await this.userService.addBook(userId, book);
    }

    @Delete(':userId/removeBook/:bookId')
    async remove(@Param('userId') userId: string, @Param('bookId') bookId: string ) {
        return await this.userService.removeBook(userId, bookId);
    }

}
