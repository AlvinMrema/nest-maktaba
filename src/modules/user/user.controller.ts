import { Controller, Delete, Get, Param, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    console.log('All Users.');
  }

  @Get(':id')
  getUserById(@Param() id) {
    console.log(`User with ID -> ${id}`);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, userData) {
    console.log(`User ${id} updated`, userData);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    console.log(`User ${id} Deleted`);
  }
}
