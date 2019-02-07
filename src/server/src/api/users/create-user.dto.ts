import { IsString, } from 'class-validator';

export class CreateUserDto {
  @IsString() readonly username: string;

  @IsString() readonly description: string;
}
