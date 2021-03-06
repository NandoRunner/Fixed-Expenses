import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { BaseSavePage } from '../base-save.page';
import { TranslateService } from '@ngx-translate/core';
import { GasService } from '../../services/gas.service';
import { Gas } from '../../models/gas.model';

@Component({
  selector: 'app-gas-save',
  templateUrl: './gas-save.page.html',
  styleUrls: ['../green.page.scss'],
})
export class GasSavePage extends BaseSavePage<Gas> {

  constructor(
    protected fb: FormBuilder,
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected route: ActivatedRoute,
    protected service: GasService,
    protected translate: TranslateService
  ) {
    super(fb, navCtrl, overlayService, service, translate, 'gas');

    this.type = '3';
  }

  ngOnInit(): void {
    this.createForm();
    this.init(this.route.snapshot.paramMap.get('id'));
  }
}
