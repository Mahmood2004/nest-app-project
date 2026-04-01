/**
 * users/dto/update-user.dto.ts — Validates the PUT /users/:id request body.
 * PartialType takes CreateUserDto and makes all fields optional —
 * so you can update just one field without sending the full object.
 * All validation rules from CreateUserDto are inherited automatically.
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
