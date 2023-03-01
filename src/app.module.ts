import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, BookModule, AuthModule],
})
export class AppModule {}
