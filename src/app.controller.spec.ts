/**
 * app.controller.spec.ts — Unit test for AppController.
 * Spins up a minimal NestJS module with only AppController + AppService (no real DB).
 * Tests that GET /health returns { status: 'ok' } with a timestamp string.
 * Run with: npm run test
 */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('health', () => {
    it('should return status ok with a timestamp', () => {
      const result = appController.getHealth();
      expect(result).toMatchObject({ status: 'ok' });
      expect(typeof (result as any).timestamp).toBe('string');
    });
  });
});
