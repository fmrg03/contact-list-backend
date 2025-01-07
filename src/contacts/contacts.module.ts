import { Module } from '@nestjs/common';
import { ContactsService } from './service/contacts.service';
import { ContactsController } from './controller/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
