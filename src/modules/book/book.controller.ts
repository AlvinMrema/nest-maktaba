import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('book')
export class BookController {
  @Post()
  createBook(bookData) {
    console.log('Book created', bookData);
  }

  @Get()
  getBooks() {
    console.log('All Books.');
  }

  @Get(':id')
  getBookById(@Param() id: string) {
    console.log(`Book with ID -> ${id}`);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, bookData) {
    console.log(`Book ${id} updated`, bookData);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    console.log(`Book ${id} Deleted`);
  }
}
