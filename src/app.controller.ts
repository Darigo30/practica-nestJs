import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // esta ruta es la raíz de la api localhost:3000/
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
