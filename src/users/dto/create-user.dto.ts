/**
 * In Express, you write manual validation checks for every field on every route. 
 * In NestJS, you define a class with decorators instead — @IsEmail(), @MinLength(3), @IsInt(). 
 * Write the rules once, and the ValidationPipe rejects any bad request before it even reaches your controller.
 * 
 * and here is the validation rules for the CreateUserDto.
 * 
 * users/dto/create-user.dto.ts — Defines and validates the POST /users request body.
 * ValidationPipe reads these decorators automatically and returns 400 if any rule fails.
 *  - firstName / lastName → string, min 3 chars
 *  - email                → valid email format
 *  - age                  → integer between 18 and 100
 */
import { IsString, MinLength, IsEmail, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  firstName: string;

  @IsString()
  @MinLength(3)
  lastName: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(18)
  @Max(100)
  age: number;
}
