import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { WaterChartPage } from './water-chart.page';

const routes: Routes = [
  {
    path: '',
    component: WaterChartPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WaterChartPage]
})
export class WaterChartPageModule {}
