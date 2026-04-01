/**
 * test/app.e2e-spec.ts — End-to-End (E2E) test.
 * Unlike unit tests, this boots the FULL app and sends real HTTP requests — exactly like Postman.
 * beforeEach() starts the server, request() sends HTTP calls, .expect() checks the response.
 * Run with: npm run test:e2e
 *
 * Note: the test below still uses the old "Hello World!" boilerplate response.
 * It should be updated to match GET / which now returns { message, name, version }.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
