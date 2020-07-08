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
        loadChildren: './pages/power-chart/power-chart.module#PowerChartPageModule'
      },
      {
        path: 'create',
        loadChildren: './pages/power-save/power-save.module#PowerSavePageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './pages/power-save/power-save.module#PowerSavePageModule'
      },
      {
         path: '',
         loadChildren: './pages/power-list/power-list.module#PowerListPageModule'
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerRoutingModule { }
