import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    {
      path: 'home',
      loadChildren:() => 
      import('./pages/header/header.module').then(m => m.HeaderModule)
    },
    {
      path: 'list-blog',
      loadChildren:() => 
      import('./pages/blogs/list/list.module').then(m => m.ListModule)
    },
    {
      path: 'detalle/:id',
      loadChildren:() => 
      import('./pages/blogs/detalle/detalle.module').then(m => m.DetalleModule)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
