import { Module } from '@nestjs/common';
import { ContactsService } from './service/contacts.service';
import { ContactsController } from './controller/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacts } from './entities/contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contacts])],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
