import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { BaseSavePageDirective } from '../base-save.page';
import { TranslateService } from '@ngx-translate/core';
import { GasService } from '../../services/gas.service';
import { Gas } from '../../models/gas.model';

@Component({
  selector: 'app-gas-save',
  templateUrl: './gas-save.page.html',
  styleUrls: ['../green.page.scss'],
})
export class GasSavePage extends BaseSavePageDirective<Gas> implements OnInit {
  constructor(
    private injector: Injector,
    protected route: ActivatedRoute,
    protected service: GasService,
  ) {
    super(injector, service, 'gas');
    this.type = '3';
  }

  ngOnInit() {
    this.createForm();
    this.init(this.route.snapshot.paramMap.get('id'));
  }
}
