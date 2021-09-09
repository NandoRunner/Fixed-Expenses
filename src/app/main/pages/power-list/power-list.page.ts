import { Component, Injector, OnInit } from "@angular/core";
import { BaseListPageDirective } from "../base-list.page";
import { PowerService } from "../../services/power.service";
import { Power } from "../../models/power.model";

@Component({
  selector: "app-power-list",
  templateUrl: "./power-list.page.html",
  styleUrls: ["../orange.page.scss"],
})
export class PowerListPage extends BaseListPageDirective<Power> {
  constructor(
    private injector: Injector,
    public service: PowerService
  ) {
    super(injector, service, "power");
  }
}
