import { Component,EventEmitter,Input,Output,ViewChild, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute } from '@angular/router';
import { ViajeInputComponent } from '../viaje-input/viaje-input.component';

@Component({
  selector: 'app-calculadora-viaje',
  templateUrl: './calculadora-viaje.component.html',
  styleUrls: ['./calculadora-viaje.component.scss']
})
export class CalculadoraViajeComponent
{
 
 
  /* constructor(private router: Router,private route: ActivatedRoute,) {
    // ...
  }
*/
  datos: any | undefined;
  @Input() distancia: number | undefined;
  @Input() consumo: number | undefined;
  @Input() costoCombustible: number | undefined;
  @Input() costoPeaje: number | undefined;
  @Input() tiempoEstimadoViaje: number | undefined; 
  velocidadPromedio: number = 60;
  costoTotal: number | undefined; 

   @Output() enviarTiempo = new EventEmitter<any>(); 

  calcularViaje($event: any) 
  {
      /* if (this.distancia && this.consumo && this.costoCombustible && this.costoPeaje) 
      {
        tiempoEstimadoViaje = this.distancia / this.velocidadPromedio;
        this.costoTotal = (this.distancia / this.consumo) * this.costoCombustible + this.costoPeaje;
      }
      console.log(tiempoEstimadoViaje);
      this.enviarTiempo.emit(tiempoEstimadoViaje); 
      this.router.navigate(['/aviso-descanso', tiempoEstimadoViaje]); */
      this.datos=$event;
      this.datos=this.datos;
      console.log(this.datos);
    } 

   
}

