import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

   @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  // El decorador @Output sirve para emitir eventos. Entre el <> se especifica el tipo de dato 
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }

    // console.log( this.nuevo );  
    // Emite un objeto de tipo Personaje porque el metodo onNuevoPersonaje es de tipo Personaje
    this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
        nombre: "",
        poder: 0
    };

  }

}
