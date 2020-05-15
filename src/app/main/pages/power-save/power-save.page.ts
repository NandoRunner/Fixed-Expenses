import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { PowerService } from '../../services/power.service';
import { BaseSavePage } from '../base-save.page';

@Component({
  selector: 'app-power-save',
  templateUrl: './power-save.page.html',
  styleUrls: ['./power-save.page.scss'],
})
export class PowerSavePage extends BaseSavePage {

  constructor(
    protected fb: FormBuilder,
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected route: ActivatedRoute,
    protected service: PowerService
  ) {
    super(fb, navCtrl, overlayService, route, service);
  }

  ngOnInit(): void {
    this.createForm();
    this.init();
  }
}
