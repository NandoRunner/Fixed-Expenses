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
        loadChildren: './pages/water-chart/water-chart.module#WaterChartPageModule'
      },
      {
        path: 'create',
        loadChildren: './pages/water-save/water-save.module#WaterSavePageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './pages/water-save/water-save.module#WaterSavePageModule'
      },
      {
         path: '',
         loadChildren: './pages/water-list/water-list.module#WaterListPageModule'
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterRoutingModule { }
