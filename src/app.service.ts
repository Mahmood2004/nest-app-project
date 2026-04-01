/**
 * app.service.ts — Root service. Contains logic for the root-level routes.
 *  - getInfo()   → returns API name and version
 *  - getHealth() → returns { status: 'ok', timestamp }
 * @Injectable() allows NestJS to inject this class automatically — no manual "new AppService()".
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getInfo(): object {
    return {
      message: 'Welcome to the API',
      name: 'nest-app',
      version: '0.0.1',
    };
  }

  getHealth(): object {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
