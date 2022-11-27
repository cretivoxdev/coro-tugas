import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GerdAkutComponent } from './pages/gerd-akut/gerd-akut.component';
import { GerdKronisComponent } from './pages/gerd-kronis/gerd-kronis.component';

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
    path: 'gerd-akut', component: GerdAkutComponent
  },
  {
    path: 'gerd-kronis', component: GerdKronisComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./pages/result/result.module').then( m => m.ResultPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
