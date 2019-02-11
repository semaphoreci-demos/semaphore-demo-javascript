import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({id});
  }

  async remove(id: number): Promise<null> {
    await this.usersRepository.delete(id);
    return;
  }

  async create(user: CreateUserDto): Promise<User> {
    const item = new User();
    item.username = user.username;
    item.description = user.description;
    item.age = user.age;
    item.firstName = user.firstName;
    item.lastName = user.lastName;
    return await this.usersRepository.save(item);
  }

  async update(id: number, user: CreateUserDto): Promise<User> {
    const item = await this.usersRepository.findOne({id});
    item.username = user.username;
    item.description = user.description;
    item.age = user.age;
    item.firstName = user.firstName;
    item.lastName = user.lastName;
    return await this.usersRepository.save(item);
  }
}
