import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { BaseListPage } from '../base-list.page';
import { WaterService } from '../../services/water.service';
import { Water } from '../../models/water.model';

@Component({
  selector: 'app-water-list',
  templateUrl: './water-list.page.html',
  styleUrls: ['../blue.page.scss']
})
export class WaterListPage extends BaseListPage<Water> {

  constructor(
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected service: WaterService
  ) {
    super(navCtrl, overlayService, service, "water");
  }
 
}
