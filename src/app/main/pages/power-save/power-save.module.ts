import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { PowerSavePage } from './power-save.page';

const routes: Routes = [
  {
    path: '',
    component: PowerSavePage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [PowerSavePage]
})
export class PowerSavePageModule {}
