import { Injectable } from '@nestjs/common';
import { ContactDto } from '../dto/contact.dto';
import { UpdateContactDto } from '../dto/contact.dto';

@Injectable()
export class ContactsService {
  create(ContactDto: ContactDto) {
    return 'This action adds a new contact';
  }

  findAll() {
    return `This action returns all contacts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
