import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { formatDate } from '@angular/common';
import { BaseService } from '../services/base.service';
import { BaseModel } from '../models/base.model';

export class BaseListPage {

  public title: string;
  public language: string;
  public route: string;

  list$: Observable<BaseModel[]>;

  constructor(
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected service: BaseService
  ) {}

  async ngOnInit(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.list$ = this.service.getAll();
    this.list$.pipe(take(1)).subscribe(lists => loading.dismiss());
  }

  onUpdate(o: BaseModel): void {
    this.navCtrl.navigateForward([`${this.route}`, 'edit', o.id]);
  }

  async onDelete(o: BaseModel): Promise<void> {
    await this.overlayService.alert({
      message: `Do you really want to delete this ${this.title} "${formatDate(o.issueDate.toDate(), 'MM/yyyy', 'en')}" registry?`,
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            await this.service.delete(o);
            await this.overlayService.toast({
              message: `${this.title} "${formatDate(o.issueDate.toDate(), 'MM/yyyy', 'en')}" registry deleted!`
            });
          }
        },
        'No'
      ]
    });
  }
}
