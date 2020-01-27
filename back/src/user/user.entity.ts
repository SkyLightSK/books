import {Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Book} from '../book/book.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text', {nullable: true})
  photo: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(type => Book, book => book.users)
  @JoinTable()
  books: Book[];
}
