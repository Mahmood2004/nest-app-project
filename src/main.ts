/**
 * main.ts — Entry point. First file that runs when the server starts.
 * Sets up global ValidationPipe (applies to every route automatically) then listens on port 3000.
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
