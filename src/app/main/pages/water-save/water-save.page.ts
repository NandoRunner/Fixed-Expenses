import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseSavePageDirective } from "../base-save.page";
import { WaterService } from "../../services/water.service";
import { Water } from "../../models/water.model";

@Component({
  selector: "app-water-save",
  templateUrl: "./water-save.page.html",
  styleUrls: ["../blue.page.scss"],
})
export class WaterSavePage
  extends BaseSavePageDirective<Water>
  implements OnInit
{
  constructor(
    private injector: Injector,
    protected route: ActivatedRoute,
    protected service: WaterService
  ) {
    super(injector, service);
  }

  ngOnInit(): void {
    this.createForm();
    this.init(this.route.snapshot.paramMap.get("id"));
  }
}
