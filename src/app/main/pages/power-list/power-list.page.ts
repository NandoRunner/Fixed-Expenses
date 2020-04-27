import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { PowerService } from '../../services/power.service';
import { Power } from '../../models/power.model';

@Component({
  selector: 'app-power-list',
  templateUrl: './power-list.page.html',
  styleUrls: ['./power-list.page.scss'],
})

export class PowerListPage {

  public title: string;
  public language: string;

  list$: Observable<Power[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private service: PowerService
  ) {}

  async ngOnInit(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.list$ = this.service.getAll();
    this.list$.pipe(take(1)).subscribe(lists => loading.dismiss());
  }

  onUpdate(o: Power): void {
    this.navCtrl.navigateForward(['power', 'edit', o.id]);
  }

  async onDelete(o: Power): Promise<void> {
    await this.overlayService.alert({
      message: `Do you really want to delete this Power "${o.value}" registry?`,
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            await this.service.delete(o);
            await this.overlayService.toast({
              message: `Power "${o.value}" registry deleted!`
            });
          }
        },
        'No'
      ]
    });
  }
}
