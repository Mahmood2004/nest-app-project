/**
 * app.module.ts — Root module. The top of the module tree.
 * Imports UsersModule (user routes) and PrismaModule (database connection).
 * Every new feature module gets added here as the app grows.
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule, PrismaModule],
})
export class AppModule {}