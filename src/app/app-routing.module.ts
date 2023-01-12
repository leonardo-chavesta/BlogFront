import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    {
      path: 'New',
      loadChildren:() => 
      import('./pages/blogs/crear-blog/crear-blog.module').then(m => m.CrearBlogModule)
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
      path: 'home',
      loadChildren:() => 
      import('./pages/vista-principal/vista-principal.module').then(m => m.VistaPrincipalModule)
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
