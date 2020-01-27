import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Author} from '../author/author.entity';
import {User} from '../user/user.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column( {nullable: true})
  releaseDate: Date;

  @ManyToMany(type => Author, author => author.books)
  @JoinTable()
  authors: Author[];

  @ManyToMany(type => User, user => user.books)
  users: User[];
}
