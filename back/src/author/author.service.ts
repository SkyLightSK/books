import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Author} from './author.entity';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>,
    ) {}

    async findAll(): Promise<Author[]> {
        return this.authorRepository.find();
    }

    async create(author: any): Promise<Author> {
        return await this.authorRepository.save(author);
    }
}
