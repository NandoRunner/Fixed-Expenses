import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { PowerSavePage } from './power-save.page';

const routes: Routes = [
  {
    path: '',
    component: PowerSavePage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [PowerSavePage]
})
export class PowerSavePageModule {}
