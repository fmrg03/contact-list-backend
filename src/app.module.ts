import { Module } from '@nestjs/common';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ContactsModule, UsersModule, TypeOrmModule.forRoot({
    type: 'mysql',
    database: 'contacts-list',
    username: 'admin',
    password: 'admin',
    port: 3307,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
