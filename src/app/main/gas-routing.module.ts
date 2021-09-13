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
        loadChildren: () => import('./pages/gas-chart/gas-chart.module').then(m => m.GasChartPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/gas-save/gas-save.module').then(m => m.GasSavePageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./pages/gas-save/gas-save.module').then(m => m.GasSavePageModule)
      },
      {
         path: '',
         loadChildren: () => import('./pages/gas-list/gas-list.module').then(m => m.GasListPageModule)
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GasRoutingModule { }
