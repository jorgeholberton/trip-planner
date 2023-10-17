import { Component,Input,ViewChild } from '@angular/core';
import { CalculadoraViajeComponent } from '../calculadora-viaje/calculadora-viaje.component';

@Component({
  selector: 'app-aviso-descanso',
  templateUrl: './aviso-descanso.component.html',
  styleUrls: ['./aviso-descanso.component.scss']
})
export class AvisoDescansoComponent
 {
  @Input()  tiempoEstimadoViaje!: number;// Recibe el tiempo estimado de viaje como entrada
  @ViewChild(CalculadoraViajeComponent) calculadoraViaje!: CalculadoraViajeComponent;// Referencia al componente CalculadoraViajeComponent
  

  // Método para verificar si se debe mostrar el aviso de descanso
  debeMostrarAvisoDescanso(): boolean 
  {
    this.calculadoraViaje.alerta(this.tiempoEstimadoViaje);
    return this.tiempoEstimadoViaje > 12;
  }
}
