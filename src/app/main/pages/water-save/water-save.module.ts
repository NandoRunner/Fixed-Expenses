import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { WaterSavePage } from './water-save.page';

const routes: Routes = [
  {
    path: '',
    component: WaterSavePage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [WaterSavePage]
})
export class WaterSavePageModule {}
