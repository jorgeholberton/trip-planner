import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ViajeInputComponent } from './componentes/viaje-input/viaje-input.component';
import { CalculadoraViajeComponent } from './componentes/calculadora-viaje/calculadora-viaje.component';
import { AvisoDescansoComponent } from './componentes/aviso-descanso/aviso-descanso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './core/material/material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViajeInputComponent,
    CalculadoraViajeComponent,
    AvisoDescansoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot([
      {path:'viaje-input/:enviarDatos',component: ViajeInputComponent},
      {path:'calculadora-viaje/:event',component: CalculadoraViajeComponent},
      {path:'aviso-descanso/:tiempoEstimado',component: AvisoDescansoComponent}
    ])
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
