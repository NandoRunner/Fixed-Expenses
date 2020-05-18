import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { GasSavePage } from './gas-save.page';

const routes: Routes = [
  {
    path: '',
    component: GasSavePage
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [GasSavePage]
})
export class GasSavePageModule {}
