import { Component, Output, EventEmitter,ViewChild} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
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
  public peajes:number[]=[];
  
  
  distancia: number = 0;
  consumo: number = 0;
  costoCombustible: number = 0;
  costoPeaje: number = 0;
  velocidadPromedio: number = 60;
  

  @ViewChild(CalculadoraViajeComponent) calculadora: any;
  @Output() enviarDatos = new EventEmitter<any>();

  agregarValor(nuevoValor: string) {
    if (nuevoValor) 
    {
      const valorNumerico = parseFloat(nuevoValor);
      if (!isNaN(valorNumerico)) 
      {
        this.peajes.push(valorNumerico);
      }
    }
  }
  
  redatosViaje() 
  {
         const datosViaje = 
    {
      distancia: this.distancia,
      consumo: this.consumo,
      costoCombustible: this.costoCombustible,
      costoPeaje: this.peajes.reduce((acumulador, nuevoValor) => acumulador + nuevoValor, 0),
    };

    this.enviarDatos.emit(datosViaje);
    this.router.navigate(['/calculadora-viaje/:datosViaje']);  /*datosViaje como parámetro */
    this.router.navigate(['/calculadora-viaje', datosViaje]); /*datosViaje como parte de la ruta */
    console.log("iniciando",datosViaje); 
    this.calculadora.calcularViaje(datosViaje);/*trabajando con ViewChild*/
  }
}
