import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { BaseSavePageDirective } from '../base-save.page';
import { TranslateService } from '@ngx-translate/core';
import { PowerService } from '../../services/power.service';
import { Power } from '../../models/power.model';

@Component({
  selector: 'app-power-save',
  templateUrl: './power-save.page.html',
  styleUrls: ['../orange.page.scss']
})
export class PowerSavePage extends BaseSavePageDirective<Power> implements OnInit {

  constructor(
    protected fb: FormBuilder,
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected route: ActivatedRoute,
    protected service: PowerService,
    protected translate: TranslateService
  ) {
    super(fb, navCtrl, overlayService, service, translate, 'power');

    this.type = '1';
  }

  ngOnInit(): void {
    this.createForm();
    this.init(this.route.snapshot.paramMap.get('id'));
  }
}
