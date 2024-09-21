import { Injectable } from '@nestjs/common';

@Injectable()
export class PostresService {
    
    private postres = [
        {
            id: 1,
            nombre: 'McFlurry de oreo 🍦',
            precio: 4.5
        },
        {
            id: 2,
            nombre: 'Cono de chocolate 🍧',
            precio: 2.5
        }
    ]

    //Realizo una funcion para obtener los postres
    getPostres() {
        return this.postres;
    }

    //Realizo una funcion para obtener un postre por ID
    getPostreById(id: number){
        return this.postres.find(postre => postre.id === id)
    }

    //Realizo una funcion para agregar un postre
    getAddPostre(nombre: string, precio: number){
        const newPostre = {
            id: this.postres.length + 1,
            nombre,
            precio
        }
        this.postres.push(newPostre)
        return newPostre
    }

    //Realizo una funcion para eliminar un postre por ID
    deletePostreId(id: number){
        const index = this.postres.findIndex(postre => postre.id === id) //uso findIndex para encontrar el indice del postre
        if(index !== -1) {
            this.postres.splice(index, 1) //Con splice elimino el postre
        }
        return null
    }
}
