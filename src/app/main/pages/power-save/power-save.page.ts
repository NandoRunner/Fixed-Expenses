import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
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
    super(fb, navCtrl, overlayService, service);
    this.page.titleNew = 'power.new';
    this.page.titleEdit = 'power.edit';
    this.page.saving = 'Saving...';
    this.page.error = 'Error saving Power: ';
    this.page.navBack = '/power';
    this.type = '1';
  }

  ngOnInit(): void {
    this.createForm();
    this.init(this.route.snapshot.paramMap.get('id'));
  }
}
