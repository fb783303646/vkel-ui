import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Car } from './../../../models/car';
import { DataService } from './../../../services/data/data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TablesComponent implements OnInit {

  cars: Car[];
  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.cars = await this.dataService.getCars();
  }

}
