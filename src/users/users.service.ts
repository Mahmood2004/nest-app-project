/**
 * users/users.service.ts — All user business logic and database calls.
 *  - create()  → checks email uniqueness then inserts the user
 *  - findAll() → returns all users
 *  - findOne() → finds by ID, throws 404 if not found
 *  - update()  → calls findOne() first (auto 404), then updates
 *  - remove()  → calls findOne() first (auto 404), then deletes
 * NestJS maps exceptions automatically: NotFoundException → 404, BadRequestException → 400.
 * 
 * the service is where all the actual work haapens:checking emails, creating users, throwing 404s, deleting — every database call and 
 * business rule lives here. 
 * You just return a value and NestJS sends the response automatically, no res.json() like in Express.
 */
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    // check email uniqueness
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    return this.prisma.user.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: number, data: UpdateUserDto) {
    await this.findOne(id);

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.user.delete({
      where: { id },
    });

    return { message: 'User deleted successfully' };
  }
}
