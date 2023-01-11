import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list.component';
import { HeaderComponent } from '../../header/header.component';



@NgModule({
  declarations: [
    ListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule
  ]
})
export class ListModule { }
