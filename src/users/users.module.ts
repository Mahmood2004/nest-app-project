/**
 * users/users.module.ts — Groups everything related to the users feature.
 * Registers UsersController (routes) and UsersService (logic).
 * PrismaService is not listed here because PrismaModule is @Global() — already available.
 */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
