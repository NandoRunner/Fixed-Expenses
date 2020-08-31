import { Component, OnInit, Input } from '@angular/core';

import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-base-item-header',
  templateUrl: './base-item-header.component.html',
  styleUrls: ['./base-item-header.component.scss'],
})
export class BaseItemHeaderComponent {

  @Input() cssName: string;
  
  constructor(public platform: Platform) {}

}
