/**
 * prisma/prisma.module.ts — Wraps PrismaService and exposes it to the whole app.
 * @Global() means import it once in AppModule and it's available everywhere —
 * no need to import it again in every feature module.
 */
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
