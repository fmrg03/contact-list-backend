import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDto, UpdateUserDto } from '../dto/user.dto';
import { usernameInterceptor } from 'src/interceptors/username.interceptor';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UseInterceptors(usernameInterceptor) // Aplica el interceptor
  create(@Body() newUser: UserDto) {
    return this.usersService.create(newUser);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/username/:username')
  async findOnebyUsername(@Param('username') username: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user) {
      throw new NotFoundException(`Username: '${username}', not found`);
    }
    return user;
  }

  @Get('/id/:id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
