import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearBlogRoutingModule } from './crear-blog-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { CrearBlogComponent } from './crear-blog.component';


@NgModule({
  declarations: [
    CrearBlogComponent
  ],
  imports: [
    CommonModule,
    CrearBlogRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrearBlogModule { }
