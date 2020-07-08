import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
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

  constructor(
    protected navCtrl: NavController,
    protected overlayService: OverlayService,
    protected service: BaseService,
    protected name: string
  ) {
    this.title = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    this.route = name;
  }

  async ngOnInit(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.list$ = this.service.getAll();
    this.list$.pipe(take(1)).subscribe(lists => loading.dismiss());
  
    // let myCompare: CompareModel[] = [];

    // this.service.getAll().forEach(a => {
    //   a.forEach(b => {
    //     myCompare.push({
    //       //name: b.issueDate.toDate().toLocaleString().split(' ')[0].,
    //       name: ("0" + (b.issueDate.toDate().getMonth() + 1)).toLocaleString().slice(-2) + "/" + b.issueDate.toDate().getFullYear().toString(),
    //       value: b.value,
    //       value2: b.consumption,
    //       color: ""
    //     });
    //   });
    //   this.lists$ = of(myChart);
    //   this.lists$.pipe(take(1)).subscribe(lists => loading.dismiss());

    //   this.changeType("0");
    // });


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
