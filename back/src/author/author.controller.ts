import {Body, Controller, Get, Post} from '@nestjs/common';
import {AuthorService} from './author.service';
import {Author} from './author.entity';

@Controller('author')
export class AuthorController {

    constructor(private readonly authorService: AuthorService) {}

    @Get()
    findAll(): Promise<Author[]> {
        return this.authorService.findAll();
    }

    @Post()
    async create( @Body() author: any ): Promise<any> {
        return await this.authorService.create(author);
    }
}
