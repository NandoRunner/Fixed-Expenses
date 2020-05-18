import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WaterListPage } from './water-list.page';

const routes: Routes = [
  {
    path: '',
    component: WaterListPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [WaterListPage]
})
export class WaterListPageModule {}
