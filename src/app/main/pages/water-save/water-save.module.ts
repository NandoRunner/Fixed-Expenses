import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { WaterSavePage } from './water-save.page';

const routes: Routes = [
  {
    path: '',
    component: WaterSavePage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [WaterSavePage]
})
export class WaterSavePageModule {}
