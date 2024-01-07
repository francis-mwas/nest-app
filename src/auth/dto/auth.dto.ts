import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/**
 * you can olny use class validator with classes not interface
 */
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
