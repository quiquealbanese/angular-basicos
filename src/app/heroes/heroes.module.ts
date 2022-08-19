import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

// Las declaraciones en el decorador indica que objetos tiene este modulo
// Los export exponen cosas fuera de este modulo
// En los imports, se importan modulos de afuera
@NgModule ({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        // El CommonModule permite utilizar el ngif y el ngfor entre otros. Tiene que estar 
        CommonModule
    ]
})
export class HeroesModule {}
