import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GasListPage } from './gas-list.page';

const routes: Routes = [
  {
    path: '',
    component: GasListPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [GasListPage]
})
export class GasListPageModule {}
