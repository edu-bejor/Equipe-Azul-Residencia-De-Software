import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/empresas')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/empresas')
  getEmpresas(): string[] {
    return this.appService.getEmpresas('Mackenzie', 'Maria Antonia');
  }
}
