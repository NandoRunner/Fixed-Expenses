import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      /*{
        path: 'chart',
        loadChildren: './pages/gas-chart/gas-chart.module#GasChartPageModule'
      },*/
      {
        path: 'create',
        loadChildren: './pages/gas-save/gas-save.module#GasSavePageModule'
      },
      {
        path: 'edit/:id',
        loadChildren: './pages/gas-save/gas-save.module#GasSavePageModule'
      },
      {
         path: '',
         loadChildren: './pages/gas-list/gas-list.module#GasListPageModule'
       }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GasRoutingModule { }
