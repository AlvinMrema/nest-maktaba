import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login() {
    console.log('User Logged In.');
  }

  @Post('register')
  register() {
    // Use UserService for adding User to the DB
    console.log('User Registered!');
  }

  @Post('logout')
  logout() {
    console.log('User Logged Out...');
  }
}
