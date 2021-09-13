import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'gas', loadChildren: () => import('./main/gas.module').then(m => m.GasModule), canLoad: [AuthGuard] },
  { path: 'power', loadChildren: () => import('./main/power.module').then(m => m.PowerModule), canLoad: [AuthGuard] },
  { path: 'water', loadChildren: () => import('./main/water.module').then(m => m.WaterModule), canLoad: [AuthGuard] },
  { path: 'home', loadChildren: () => import('./main/home.module').then(m => m.HomeModule), canLoad: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
