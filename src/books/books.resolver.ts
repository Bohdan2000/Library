import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { BookInput } from './inputs/book.input';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Resolver('Book')
export class BookResolver {
  constructor(
    private readonly booksService: BooksService,
  ) {}

  @Query(() => [BookDto])
  async books() {
    return await this.booksService.getAll();
  }

  @Query(() => BookDto)
  async book(@Args('id') id: number) {
    return await this.booksService.getOne(id);
  }

  @Mutation(() => BookDto)
  @UseGuards(AuthGuard)
  async addBook(@Args('input') input: BookInput) {
    return await this.booksService.addBook(input);
  }

  @Mutation(() => BookDto)
  @UseGuards(AuthGuard)
  async updateBook(@Args('id') id: number, @Args('input') input: BookInput) {
    return await this.booksService.updateBook(id, input);
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  async deleteBook(@Args('id') id: number) {
    const book = await this.booksService.deleteBook(id);
    return book.affected;
  }
}
