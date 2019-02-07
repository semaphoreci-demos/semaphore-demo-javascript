import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Controller,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ICreatedUser } from './user.interface';
import { ValidationPipe } from '../../common/validation.pipe';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<ICreatedUser[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<ICreatedUser> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id): Promise<void> {
    return this.usersService.remove(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() user: CreateUserDto): Promise<ICreatedUser> {
    return this.usersService.create(user);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id, @Body() user: CreateUserDto): Promise<ICreatedUser> {
    return this.usersService.update(id, user);
  }
}
