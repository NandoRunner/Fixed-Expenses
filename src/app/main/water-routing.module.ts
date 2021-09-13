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
        loadChildren: () => import('./pages/water-chart/water-chart.module').then(m => m.WaterChartPageModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./pages/water-save/water-save.module').then(m => m.WaterSavePageModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./pages/water-save/water-save.module').then(m => m.WaterSavePageModule)
      },
      {
         path: '',
         loadChildren: () => import('./pages/water-list/water-list.module').then(m => m.WaterListPageModule)
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterRoutingModule { }
