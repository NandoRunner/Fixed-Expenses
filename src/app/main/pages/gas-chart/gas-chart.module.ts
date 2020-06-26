import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { GasChartPage } from './gas-chart.page';

const routes: Routes = [
  {
    path: '',
    component: GasChartPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GasChartPage]
})
export class GasChartPageModule {}
