import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    },
  ];

  nuevo: Personaje = {
    nombre: "PEPE",
    poder: 500
  }

  agregarNuevoPersonaje( argumento: Personaje ) {
    // Para depurar es conveniente usar esto que actúa como Break Point
    // debugger;
    this.personajes.push( argumento );
  }

}
