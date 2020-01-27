import {Body, Controller, Delete, Get, Param, Post, Req} from '@nestjs/common';
import {BookService} from './book.service';
import {Book} from './book.entity';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Post()
    async create( @Body() book: any ): Promise<any> {
        return await this.bookService.create(book);
    }

    @Delete(':bookId')
    async remove(@Param('bookId') bookId: string ) {
        return await this.bookService.remove(bookId);
    }
}
