import { Test, TestingModule } from '@nestjs/testing';
import { ComidasController } from './comidas.controller';

describe('ComidasController', () => {
  let controller: ComidasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComidasController],
    }).compile();

    controller = module.get<ComidasController>(ComidasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
