import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { MyChart } from '../../../core/models/myChart.model';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { BaseChartPage } from 'src/app/core/pages/base-chart';

import { PowerService } from '../../services/power.service';
import { ProjectType } from 'src/app/core/models/projectType.enum';

@Component({
  selector: 'app-power-chart',
  templateUrl: './power-chart.page.html',
  styleUrls: ['../orange.page.scss']
})
export class PowerChartPage extends BaseChartPage {

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private authService: AuthService,
    private service: PowerService
  ) {
    super();
    this.lists$ = new Observable<MyChart[]>();
    this.isGroup = true;
    this.projectType = ProjectType.fixedExpenses;
  }

  async ngOnInit(): Promise<void> {
    this.splitMin = 0;
    this.splitMax = 0;
    this.measure = [];
    await this.loadData();
  }

  async loadData() {
    const loading = await this.overlayService.loading();

    let myChart: MyChart[] = [];

    this.authService.authState$.subscribe(user => {
      if (user) {
        this.service.getAll().forEach(a => {
          a.forEach(b => {
            myChart.push({
              //name: b.issueDate.toDate().toLocaleString().split(' ')[0].,
              name: ("0" + (b.issueDate.toDate().getMonth() + 1)).toLocaleString().slice(-2) + "/" + b.issueDate.toDate().getFullYear().toString(),
              value: b.value,
              value2: b.consumption,
              value3: 0,
              color: ""
            });
          });
          this.lists$ = of(myChart);
          this.lists$.pipe(take(1)).subscribe(lists => loading.dismiss());

          this.changeType("0");
        });
      }
    });
  }
  
  changeType(param: any) {
    this.showBar = this.showPie = this.showBar2 = this.showPie2 = false;

    this.measure[0] = "R$";
    this.valueType = 1;
  
    if (param === "2" || param === "3")
    {
      this.measure[0] = "m3";
      this.valueType = 2;
    }
 
    console.log(this.measure);
    console.log(this.valueType);

    if (param === "1" || param === "3") {
      this.createPieChart();
    }
    else {
      this.createBarChart(12);
    }
  }
}
