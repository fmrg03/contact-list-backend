import { Injectable } from '@nestjs/common';
import { UserDto, UpdateUserDto } from '../dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}
  create(user: UserDto) {
    console.log('user', user);
    return this.userRepository.save(user);
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOne({ where: { username } });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    console.log('id', id);
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
