import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComidasController } from './mcdonals/comidas/comidas.controller';
import { PostresController } from './mcdonals/postres/postres.controller';
import { PostresService } from './mcdonals/postres/postres.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  controllers: [AppController, ComidasController, PostresController],
  providers: [AppService, PostresService],
})
export class AppModule {}
