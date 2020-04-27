import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PowerListPage } from './power-list.page';

const routes: Routes = [
  {
    path: '',
    component: PowerListPage
  }
];

@NgModule({
  imports: [SharedModule, ComponentsModule, RouterModule.forChild(routes)],
  declarations: [PowerListPage]
})
export class PowerListPageModule {}
