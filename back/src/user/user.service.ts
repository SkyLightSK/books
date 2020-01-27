import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find({relations: ['books', 'books.authors']});
    }

    async addBook(userId, book): Promise<User> {
        const user = await this.userRepository
            .findOne(userId, { relations: ['books', 'books.authors'] });
        if (user.books.length < 5) {
            user.books = [...user.books, book];
            return await this.userRepository.save(user);
        }
        return user;
    }

    async removeBook(userId, bookId): Promise<User> {
        const user = await this.userRepository
            .findOne(userId, { relations: ['books', 'books.authors'] });
        user.books = user.books.filter(b => b.id !== +bookId);
        return await this.userRepository.save(user);
    }

    async create( user: any ) {
        const u = await this.userRepository.save(user);
        u.token = user.name;
        return u;
    }

    async getOne(user: any) {
        const u = await this.userRepository.findOneOrFail(
            {where: {name: user.name},
            relations: ['books', 'books.authors']});
        (u as any).token = user.name;
        return u;
    }
}
