import { Component, EventEmitter, Output, Input } from '@angular/core';
import { BaseModel } from '../../models/base.model';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-base-item',
  templateUrl: './base-item.component.html',
  styleUrls: ['./base-item.component.scss'],
})
export class BaseItemComponent {

  @Input() item: BaseModel;
  @Input() color: string;
  @Output() update = new EventEmitter<BaseModel>();
  @Output() delete = new EventEmitter<BaseModel>();

  constructor(public platform: Platform) {}
}
