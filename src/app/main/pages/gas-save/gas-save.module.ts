import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GasSavePage } from './gas-save.page';

const routes: Routes = [
  {
    path: '',
    component: GasSavePage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [GasSavePage]
})
export class GasSavePageModule {}
