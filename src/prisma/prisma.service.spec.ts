/**
 * prisma/prisma.service.spec.ts — Unit test for PrismaService.
 * Checks that PrismaService can be created and injected without errors.
 * Does not connect to a real database — just verifies the class is defined.
 * Run with: npm run test
 */
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
