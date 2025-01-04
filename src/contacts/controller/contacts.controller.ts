import { Controller, Get } from '@nestjs/common';

@Controller('contacts')
export class ContactsController {
  @Get()
  test () {
    return 'Hello from contacts controller';
  }

}
