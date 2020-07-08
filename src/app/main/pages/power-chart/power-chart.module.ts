import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PowerChartPage } from './power-chart.page';

const routes: Routes = [
  {
    path: '',
    component: PowerChartPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PowerChartPage]
})
export class PowerChartPageModule {}
