import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from '../models/index';
import { BookInput } from './inputs/book.input';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly booksRepository: Repository<BookEntity>,
  ) { }

  public getAll = async () => {
    return  this.booksRepository.find();
  }

  public getOne = async ( id: number ) => {
    return  this.booksRepository.findOne(id);
  }

  public addBook = async ( input: BookInput ) => {
    return  this.booksRepository.save({title: input.title});
  }

  public updateBook = async ( id: number, input: BookInput ) => {
    const book = await this.booksRepository.findOne(id);
    if (!book) {
        throw new BadRequestException('Book is not found');
    }
    book.title = input.title;
    return this.booksRepository.save(book);
  }

  public deleteBook = async ( id: number ) => {
    const deletedBook = await this.booksRepository.findOne(id);
    if (!deletedBook) {
        throw new BadRequestException('Book is not found');
    }
    return this.booksRepository.delete(id);
  }
}
