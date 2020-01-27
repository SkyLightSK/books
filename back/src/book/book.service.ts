import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Book} from './book.entity';
import {User} from '../user/user.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) {}

    async findAll(): Promise<Book[]> {
        return this.bookRepository.find({relations: ['authors']});
    }

    async remove(bookId): Promise<Book[]> {
        await this.bookRepository.delete(+bookId);
        return await this.findAll();
    }

    async create(book: any): Promise<Book> {
        return await this.bookRepository.save(book);
    }
}
