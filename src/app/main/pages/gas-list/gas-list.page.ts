import { Component, Injector, OnInit } from '@angular/core';
import { BaseListPageDirective } from '../base-list.page';
import { GasService } from '../../services/gas.service';
import { Gas } from '../../models/gas.model';

@Component({
  selector: 'app-gas-list',
  templateUrl: './gas-list.page.html',
  styleUrls: ['../green.page.scss'],
})
export class GasListPage extends BaseListPageDirective<Gas> {

  constructor(private injector: Injector,
    public service: GasService
  ) {
    super(injector, service, "gas");
  }

}
