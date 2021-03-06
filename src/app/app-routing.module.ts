import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'gas', loadChildren: './main/gas.module#GasModule', canLoad: [AuthGuard] },
  { path: 'power', loadChildren: './main/power.module#PowerModule', canLoad: [AuthGuard] },
  { path: 'water', loadChildren: './main/water.module#WaterModule', canLoad: [AuthGuard] },
  { path: 'home', loadChildren: './main/home.module#HomeModule', canLoad: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
