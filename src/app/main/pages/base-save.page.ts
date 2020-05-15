import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { PowerService } from '../services/power.service';

export class BaseSavePage implements OnInit {

  formGroup: FormGroup;
  myDate: Date = new Date();
  pageTitle = '...';
  listId: string = undefined;

  constructor(
    protected fb: FormBuilder,
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected route: ActivatedRoute,
    protected service: PowerService
  ) {}

  ngOnInit(): void {
  }

  init(): void {
    const listId = this.route.snapshot.paramMap.get('id');
    if (!listId) {
      this.pageTitle = 'power.new';
      return;
    }
    this.listId = listId;
    this.pageTitle = 'power.edit';
    this.service
      .get(listId)
      .pipe(take(1))
      .subscribe(({ issueDate, consumption, value, type }) => {
        this.formGroup.get('issueDate').setValue(issueDate.toDate().toISOString());
        this.formGroup.get('consumption').setValue(consumption);
        this.formGroup.get('value').setValue(value);
        this.formGroup.get('type').setValue(type);
      });
  }

  protected createForm(): void {
    this.formGroup = this.fb.group({
      id: [''],
      issueDate: ['', [Validators.required]],
      consumption: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
      value: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
      type: ['1']
    });
  }

  async onSubmit(): Promise<void> {
    this.formGroup.get('issueDate').setValue(this.myDate);

    const loading = await this.overlayService.loading({
      message: 'Saving...'
    });
    try {
      const list = !this.listId
        ? await this.service.create(this.formGroup.value)
        : await this.service.update({
            id: this.listId,
            ...this.formGroup.value
          });
      this.service.deleteFieldId(list.id);
      this.navCtrl.navigateBack('/power');
    } catch (error) {
      console.log('Error saving power: ', error);
      await this.overlayService.toast({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }

  ionViewDidEnter(): void {
    this.formGroup.get('issueDate').setValue(this.myDate.toISOString());
  }

  changeDate(selectedValue: any): void {
    this.myDate = new Date(selectedValue);
  }
}
