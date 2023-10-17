import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-aviso-descanso',
  templateUrl: './aviso-descanso.component.html',
  styleUrls: ['./aviso-descanso.component.scss']
})
export class AvisoDescansoComponent
 {
  @Input()  tiempoEstimadoViaje!: number;// Recibe el tiempo estimado de viaje como entrada
  
  // Método para verificar si se debe mostrar el aviso de descanso
  debeMostrarAvisoDescanso(): boolean 
  {
    return this.tiempoEstimadoViaje > 12;
  }
}
