import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { WaterService } from '../../services/water.service';
import { BaseSavePage } from '../base-save.page';

@Component({
  selector: 'app-water-save',
  templateUrl: './water-save.page.html',
  styleUrls: ['../water.page.scss'],
})
export class WaterSavePage extends BaseSavePage {

  constructor(
    protected fb: FormBuilder,
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected route: ActivatedRoute,
    protected service: WaterService
  ) {
    super(fb, navCtrl, overlayService, service);
    this.page.titleNew = 'water.new';
    this.page.titleEdit = 'water.edit';
    this.page.saving = 'Saving...';
    this.page.error = 'Error saving Water: ';
    this.page.navBack = '/water';
    this.type = '2';
  }

  ngOnInit(): void {
    this.createForm();
    this.init(this.route.snapshot.paramMap.get('id'));
  }
}
