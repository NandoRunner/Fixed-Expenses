import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseSavePageDirective } from "../base-save.page";
import { PowerService } from "../../services/power.service";
import { Power } from "../../models/power.model";

@Component({
  selector: "app-power-save",
  templateUrl: "./power-save.page.html",
  styleUrls: ["../orange.page.scss"],
})
export class PowerSavePage
  extends BaseSavePageDirective<Power>
  implements OnInit
{
  constructor(
    private injector: Injector,
    protected route: ActivatedRoute,
    protected service: PowerService
  ) {
    super(injector, service);
  }

  ngOnInit(): void {
    this.createForm();
    this.init(this.route.snapshot.paramMap.get("id"));
  }
}
