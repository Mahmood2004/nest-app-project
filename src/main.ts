/**
 * main.ts is the entry point. It does three things: 
 * 1.creates the NestJS app, 
 * 2.attaches a ValidationPipe 
 * 3.and starts listening on port 3000.
 *
 * Everything else is wired together from here.
 * 
 * ValidationPipe options:
 *  - whitelist: true             → removes extra fields not in the DTO
 *  - forbidNonWhitelisted: true  → throws 400 if extra fields are sent
 *  - transform: true             → converts types automatically (e.g. "1" → 1)
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove unknown fields
      forbidNonWhitelisted: true, // throw error if extra fields
      transform: true, // auto transform types
    }),
  );

  await app.listen(3000);
}
bootstrap();
