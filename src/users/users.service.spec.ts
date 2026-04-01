/**
 * users/users.service.spec.ts — Unit test for UsersService.
 * Checks that UsersService can be instantiated by NestJS without errors.
 * No real DB calls — just verifies the service is defined and injectable.
 * Run with: npm run test
 */
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
