import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { formatDate } from '@angular/common';
import { BaseService } from '../services/base.service';
import { BaseModel } from '../models/base.model';
import { CompareModel } from '../models/compare.model';

export class BaseListPage<T> {

  public title: string;
  public language: string;
  public route: string;

  list$: Observable<any[]>;
  listNew: Observable<any[]>;

  constructor(
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    public service: BaseService,
    protected name: string
  ) {
    this.title = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    this.route = name;


  }

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
