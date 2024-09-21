import { Test, TestingModule } from '@nestjs/testing';
import { PostresService } from './postres.service';

describe('PostresService', () => {
  let service: PostresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostresService],
    }).compile();

    service = module.get<PostresService>(PostresService);
  });

  it('deberia agregar un postre nuevo', () => {
    const postreNuevo = service.getAddPostre('McFlurry de oreo 🍦', 4.5);
    expect(postreNuevo).toEqual({ //Comparo si el postre nuevo es igual al objeto que se espera
      id: 3,
      nombre: 'McFlurry de oreo 🍦',
      precio: 4.5
    })
  });
});
