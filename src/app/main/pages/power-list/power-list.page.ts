import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { BaseListPage } from '../base-list.page';
import { PowerService } from '../../services/power.service';
import { Power } from '../../models/power.model';

@Component({
  selector: 'app-power-list',
  templateUrl: './power-list.page.html',
  styleUrls: ['./power-list.page.scss'],
})

export class PowerListPage extends BaseListPage<Power> {

  constructor(
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected service: PowerService
  ) {
    super(navCtrl, overlayService, service, "power");
  }
 
}
