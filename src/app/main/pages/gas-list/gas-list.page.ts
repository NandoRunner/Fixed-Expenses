import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { BaseListPage } from '../base-list.page';
import { GasService } from '../../services/gas.service';

@Component({
  selector: 'app-gas-list',
  templateUrl: './gas-list.page.html',
  styleUrls: ['./gas-list.page.scss'],
})
export class GasListPage extends BaseListPage {

  constructor(
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected service: GasService
  ) {
    super(navCtrl, overlayService, service);

    this.title = "Gas";
    this.route = "gas";
  }
 
}
