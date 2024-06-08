import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  consumerId: string;

  @IsString()
  @IsNotEmpty()
  keyId: string;

  @IsBoolean()
  @IsNotEmpty()
  isCheater: boolean;
}