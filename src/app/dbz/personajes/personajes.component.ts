import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  // Puese ser una forma de renombrar el input para nombrarlo de otra manera
  //@Input("data") personajes: any[] = [];
  @Input() personajes: Personaje[] = [];

}
