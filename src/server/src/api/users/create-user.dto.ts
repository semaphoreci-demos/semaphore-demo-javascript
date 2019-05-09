import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString() readonly username: string;

  @IsString() readonly description: string;

  @IsString()
  @IsOptional()
  readonly firstName?: string;

  @IsString()
  @IsOptional()
  readonly lastName?: string;

  @IsString()
  @IsOptional()
  readonly age?: number;
}
