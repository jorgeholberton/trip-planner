import { Component, Output, EventEmitter,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ActivatedRoute } from '@angular/router';
import { CalculadoraViajeComponent } from '../calculadora-viaje/calculadora-viaje.component';


@Component({
  selector: 'app-viaje-input',
  templateUrl: './viaje-input.component.html',
  styleUrls: ['./viaje-input.component.scss']
})

export class ViajeInputComponent 
{
 
  constructor(private router: Router, private route: ActivatedRoute) { } 

  distancia: number = 0;
  consumo: number = 0;
  costoCombustible: number = 0;
  costoPeaje: number = 0;
  velocidadPromedio: number = 60;
  
  @ViewChild(CalculadoraViajeComponent) calculadora: any;
  @Output() enviarDatos = new EventEmitter<any>();
  
  redatosViaje() 
  {
    
     const datosViaje = 
    {
      distancia: this.distancia,
      consumo: this.consumo,
      costoCombustible: this.costoCombustible,
      costoPeaje: this.costoPeaje,
      velocidadPromedio: this.velocidadPromedio
    };

    this.enviarDatos.emit(datosViaje);
    this.router.navigate(['/calculadora-viaje/:datosViaje']); 
    console.log("iniciando",datosViaje); 
    this.calculadora.calcularViaje(datosViaje);
    
  }

  
}
