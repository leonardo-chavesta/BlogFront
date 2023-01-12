import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleRoutingModule } from './detalle.routing.module';
  import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { DetalleComponent } from './detalle.component';


@NgModule({
  declarations: [
    DetalleComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DetalleModule { }
