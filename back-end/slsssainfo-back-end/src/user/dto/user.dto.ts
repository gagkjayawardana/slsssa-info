import { IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  password: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
