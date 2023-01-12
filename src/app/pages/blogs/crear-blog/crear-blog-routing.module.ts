
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { CrearBlogComponent } from './crear-blog.component';

const routes : Routes =[{path:'', component:CrearBlogComponent}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrearBlogRoutingModule {}