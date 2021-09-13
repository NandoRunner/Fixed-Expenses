import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'chart',
        loadChildren: () => import('./pages/power-chart/power-chart.module').then(m => m.PowerChartPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/power-save/power-save.module').then(m => m.PowerSavePageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./pages/power-save/power-save.module').then(m => m.PowerSavePageModule)
      },
      {
         path: '',
         loadChildren: () => import('./pages/power-list/power-list.module').then(m => m.PowerListPageModule)
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerRoutingModule { }
