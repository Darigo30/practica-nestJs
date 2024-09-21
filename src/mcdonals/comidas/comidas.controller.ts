import { Controller, Get } from '@nestjs/common'; // Importar el Get que es un decorador nativo de Nest

@Controller('comidas') // Decorador que indica la ruta de la api 
export class ComidasController {
    
    //No tengo un servicio para esto, por ende lo declaro directamente en el controlador 
    
    @Get() // Decorador que indica que es un método http Get

    getComidas(){
        return [
            {
                nombre: "Cuarto de Libra",
                precio: 10.000,
                calorias: 550
            },
            {
                nombre: "Big Mac",
                precio: 12.000,
                calorias: 600
            },
            {
                nombre: "McNífica",
                precio: 15.000,
                calorias: 700
            },
            {
                nombre: "McPollo",
                precio: 8.000,
                calorias: 450
            },
        ]
    }
}
