import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/user.entity';

@Module({
  imports: [
    UserModule,
    BookModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'alvin',
      password: 'password',
      database: 'library',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
