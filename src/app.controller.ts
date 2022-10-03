import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Empresa } from './Empresa/empresa.model';

@Controller('empresas')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getEmpresas(@Query('name') name: string, @Query('location') location: string): Array<Empresa>{
    return this.appService.getEmpresas(name, location);
  }
}
