/**
 * users/users.controller.spec.ts — Unit test for UsersController.
 * Checks that UsersController can be instantiated by NestJS without errors.
 * No real HTTP requests, no DB — just verifies the controller is defined.
 * Run with: npm run test
 */
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
