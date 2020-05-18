import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { GasService } from '../../services/gas.service';
import { BaseSavePage } from '../base-save.page';

@Component({
  selector: 'app-gas-save',
  templateUrl: './gas-save.page.html',
  styleUrls: ['./gas-save.page.scss'],
})
export class GasSavePage extends BaseSavePage {

  constructor(
    protected fb: FormBuilder,
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected route: ActivatedRoute,
    protected service: GasService
  ) {
    super(fb, navCtrl, overlayService, service);
    this.page.titleNew = 'gas.new';
    this.page.titleEdit = 'gas.edit';
    this.page.saving = 'Saving...';
    this.page.error = 'Error saving Gas: ';
    this.page.navBack = '/gas';
    this.type = '3';
  }

  ngOnInit(): void {
    this.createForm();
    this.init(this.route.snapshot.paramMap.get('id'));
  }
}
