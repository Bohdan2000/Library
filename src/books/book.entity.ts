import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({
    name: 'title',
    type: 'varchar',
  })
  title?: string;
}
