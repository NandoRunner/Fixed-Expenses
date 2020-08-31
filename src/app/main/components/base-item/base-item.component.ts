import { Component, EventEmitter, Output, Input } from '@angular/core';

import { BaseModel } from '../../models/base.model';
import { CompareModel } from '../../models/compare.model';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-base-item',
  templateUrl: './base-item.component.html',
  styleUrls: ['./base-item.component.scss'],
})
export class BaseItemComponent {

  @Input() item: any;
  @Input() compare: CompareModel;
  @Input() values: number;
  @Input() cssName: string;
  @Output() update = new EventEmitter<BaseModel>();
  @Output() delete = new EventEmitter<BaseModel>();

  arrowUp: string = "↑";
  arrowDown: string = "↓";

 constructor(public platform: Platform) {}
  
}
