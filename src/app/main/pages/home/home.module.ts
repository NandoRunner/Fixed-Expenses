import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsModule } from "../../components/components.module";
import { SharedModule } from "src/app/shared/shared.module";
import { HomePage } from "./home.page";

import { GasListPage } from "../gas-list/gas-list.page";
import { GasListPageModule } from "../gas-list/gas-list.module";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
];

@NgModule({
  imports: [
    GasListPageModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
