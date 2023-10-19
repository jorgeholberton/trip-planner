import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule}    from '@angular/material/button';
import { MatCardModule }    from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialModule { }
