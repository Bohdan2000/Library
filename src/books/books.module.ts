import { Module } from '@nestjs/common';
import { BookResolver } from './books.resolver';
import { BooksService } from './books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from '../models';

@Module({
  providers: [BookResolver, BooksService],
  imports: [TypeOrmModule.forFeature([BookEntity])],
  exports: [],
})
export class BooksModule {}
