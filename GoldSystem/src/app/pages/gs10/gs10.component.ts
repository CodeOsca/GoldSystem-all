import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  Color,
} from 'ng2-charts';
@Component({
  selector: 'app-gs10',
  templateUrl: './gs10.component.html',
  styleUrls: ['./gs10.component.css'],
})
export class Gs10Component implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [
    'Ventas',
    'Fundación',
    'Administracíón',
    'Alianzas',
    'Airdrop',
  ];
  public pieChartData: SingleDataSet = [25, 30, 20, 10, 15];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public chartColors: Color[] = [
    {
      backgroundColor: ['#191D4D', '#4B339F', '#4B335c', '#281D4D', '#731c4D'],
    },
  ];

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {}
}
