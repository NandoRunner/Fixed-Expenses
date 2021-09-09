import { Component, Injector, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseSavePageDirective } from "../base-save.page";
import { GasService } from "../../services/gas.service";
import { Gas } from "../../models/gas.model";

@Component({
  selector: "app-gas-save",
  templateUrl: "./gas-save.page.html",
  styleUrls: ["../green.page.scss"],
})
export class GasSavePage extends BaseSavePageDirective<Gas> implements OnInit {
  constructor(
    private injector: Injector,
    protected route: ActivatedRoute,
    protected service: GasService
  ) {
    super(injector, service);
  }

  ngOnInit() {
    this.createForm();
    this.init(this.route.snapshot.paramMap.get("id"));
  }
}
