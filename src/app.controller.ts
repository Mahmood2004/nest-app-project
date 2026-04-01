/**
 * app.controller.ts — Root controller. Handles top-level routes.
 *  - GET /        → welcome message + API info
 *  - GET /health  → server status + timestamp
 * No logic here — controller receives the request and delegates to AppService.
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): object {
    return this.appService.getInfo();
  }

  @Get('health')
  getHealth(): object {
    return this.appService.getHealth();
  }
}
