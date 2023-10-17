import { Component,EventEmitter,Input,Output  } from '@angular/core';
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
   constructor(private router: Router,private route: ActivatedRoute,) {
    // ...
  }

  datos: any | undefined;
  @Input() distancia: number | undefined;
  @Input() consumo: number | undefined;
  @Input() costoCombustible: number | undefined;
  @Input() costoPeaje: number | undefined;
  tiempoEstimadoViaje: number | undefined; 
  velocidadPromedio: number = 60;
  costoTotal: number | undefined; 

   @Output() enviarTiempo = new EventEmitter<any>(); 

  calcularViaje($event: any) 
  {   
     this.datos=$event; 
     if (this.datos.distancia && this.datos.consumo && this.datos.costoCombustible && this.datos.costoPeaje)  
      {
        this.tiempoEstimadoViaje = this.datos.distancia / this.velocidadPromedio;
        this.costoTotal = (this.datos.distancia /this.datos.consumo) * this.datos.costoCombustible + this.datos.costoPeaje;
      }
      
      this.enviarTiempo.emit(this.tiempoEstimadoViaje); 
      this.router.navigate(['/aviso-descanso/: this.tiempoEstimadoViaje']); 
      this.datos=[$event]; 
      this.datos=[...this.datos]; 
    } 
}

