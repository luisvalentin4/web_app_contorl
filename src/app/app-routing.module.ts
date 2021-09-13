import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'colores',
    loadChildren: () => import('./paginas/colores/colores.module').then( m => m.ColoresPageModule)
  },  {
    path: 'ajustes',
    loadChildren: () => import('./paginas/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'soporte',
    loadChildren: () => import('./paginas/soporte/soporte.module').then( m => m.SoportePageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./paginas/info/info.module').then( m => m.InfoPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
