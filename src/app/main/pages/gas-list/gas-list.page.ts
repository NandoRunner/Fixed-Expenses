import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { BaseListPage } from '../base-list.page';
import { GasService } from '../../services/gas.service';
import { Gas } from '../../models/gas.model';

@Component({
  selector: 'app-gas-list',
  templateUrl: './gas-list.page.html',
  styleUrls: ['../green.page.scss'],
})
export class GasListPage extends BaseListPage<Gas> {

  constructor(
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    public service: GasService,
    public platform: Platform
  ) {
    super(navCtrl, overlayService, service, "gas");
  }

}
