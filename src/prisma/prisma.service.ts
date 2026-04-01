/**
 * prisma/prisma.service.ts — Manages the database connection.
 * Extends PrismaClient (gives access to all DB methods) and connects automatically
 * on startup via OnModuleInit. Inject this service anywhere you need the database.
 * Connection string comes from DATABASE_URL in your .env file.
 */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
