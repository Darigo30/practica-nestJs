import { Controller, Get, Param, Body, Post, Delete } from '@nestjs/common';
import { PostresService } from './postres.service';

@Controller('postres')
export class PostresController {

    constructor(private PostresService: PostresService) {} //Inyectar el servicio de postres

    @Get() //Decorador para traerme los postrecitos
    getAllPostres(){ //Funcion que llama al servicio de postres 
        return this.PostresService.getPostres();
    }

    @Get(':id')   //Get ID
    getPostreById(@Param('id') id: string){ //Funcion que llama al servicio de postres por ID
        return this.PostresService.getPostreById(Number(id))
    }

    @Post() // Agregar un postre 
    addPostreNew( //se recibe el nombre y precio como parametro usando el decorador @Body
        @Body('nombre') nombre: string,
        @Body('precio') precio: number
    ) {
        return this.PostresService.getAddPostre(nombre, precio)
    }

    @Delete(':id') //Eliminar un postre por ID
    deletePostreById(@Param('id') id: string) {
        this.PostresService.deletePostreId(Number(id))
    }
}
