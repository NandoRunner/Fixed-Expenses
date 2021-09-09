import { Component, Injector, OnInit } from '@angular/core';
import { BaseListPageDirective } from '../base-list.page';
import { WaterService } from '../../services/water.service';
import { Water } from '../../models/water.model';

@Component({
  selector: 'app-water-list',
  templateUrl: './water-list.page.html',
  styleUrls: ['../blue.page.scss']
})
export class WaterListPage extends BaseListPageDirective<Water> {

  constructor(
    private injector: Injector,
    public service: WaterService
  ) {
    super(injector, service, "water");
  }
 
}
