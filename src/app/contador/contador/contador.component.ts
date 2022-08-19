// El nombre del archivo es la/s palabra/s a lo que refiere (mas de 1 palabra, se separa con guion medio), luego punto
//, luego la palabra component/service/module..., luego punto, luego la extensión del archivo (html,ts, etc)
import { Component } from '@angular/core'

@Component({
    selector: "app-contador",
    template: `
        <!-- Entre las 2 llaves, se puede acceder a una propiedad del componente del archivo ts 
        o bien escribir cualquier código de js

        Los eventos se definen con paréntesis
        -->
        <h1> {{ titulo }} </h1>
        <h3>La base es: {{ base }}</h3>

        <button (click)="acumular(base)">+ {{ base }}</button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-base)">- {{ base }}</button>
    `
})
export class contadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    acumular( valor: number ){
      this.numero += valor
    }
}