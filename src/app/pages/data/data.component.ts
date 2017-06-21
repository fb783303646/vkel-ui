import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  cars: any[];
  filesTree2: any[];
  selectedFile: any;

  constructor() {
    this.filesTree2 = [
      {
        'label': 'Documents',
        'data': 'Documents Folder',
        'expandedIcon': 'fa-folder-open',
        'collapsedIcon': 'fa-folder',
        'children': [{
          'label': 'Work',
          'data': 'Work Folder',
          'expandedIcon': 'fa-folder-open',
          'collapsedIcon': 'fa-folder',
          'children': [{ 'label': 'Expenses.doc', 'icon': 'fa-file-word-o', 'data': 'Expenses Document' }, { 'label': 'Resume.doc', 'icon': 'fa-file-word-o', 'data': 'Resume Document' }]
        },
        {
          'label': 'Home',
          'data': 'Home Folder',
          'expandedIcon': 'fa-folder-open',
          'collapsedIcon': 'fa-folder',
          'children': [{ 'label': 'Invoices.txt', 'icon': 'fa-file-word-o', 'data': 'Invoices for this month' }]
        }]
      },
      {
        'label': 'Pictures',
        'data': 'Pictures Folder',
        'expandedIcon': 'fa-folder-open',
        'collapsedIcon': 'fa-folder',
        'children': [
          { 'label': 'barcelona.jpg', 'icon': 'fa-file-image-o', 'data': 'Barcelona Photo' },
          { 'label': 'logo.jpg', 'icon': 'fa-file-image-o', 'data': 'PrimeFaces Logo' },
          { 'label': 'primeui.png', 'icon': 'fa-file-image-o', 'data': 'PrimeUI Logo' }]
      },
      {
        'label': 'Movies',
        'data': 'Movies Folder',
        'expandedIcon': 'fa-folder-open',
        'collapsedIcon': 'fa-folder',
        'children': [{
          'label': 'Al Pacino',
          'data': 'Pacino Movies',
          'children': [{ 'label': 'Scarface', 'icon': 'fa-file-video-o', 'data': 'Scarface Movie' }, { 'label': 'Serpico', 'icon': 'fa-file-video-o', 'data': 'Serpico Movie' }]
        },
        {
          'label': 'Robert De Niro',
          'data': 'De Niro Movies',
          'children': [{ 'label': 'Goodfellas', 'icon': 'fa-file-video-o', 'data': 'Goodfellas Movie' }, { 'label': 'Untouchables', 'icon': 'fa-file-video-o', 'data': 'Untouchables Movie' }]
        }]
      }
    ];
    this.cars = [
      { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
      { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
      { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
      { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
      { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
      { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
      { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
      { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
      { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
      { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' },
      { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
      { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
      { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
      { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
      { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
      { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
      { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
      { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
      { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
      { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' },
      { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
      { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
      { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
      { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
      { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
      { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
      { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
      { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
      { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
      { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' },
      { 'brand': 'VW', 'year': 2012, 'color': 'Orange', 'vin': 'dsad231ff' },
      { 'brand': 'Audi', 'year': 2011, 'color': 'Black', 'vin': 'gwregre345' },
      { 'brand': 'Renault', 'year': 2005, 'color': 'Gray', 'vin': 'h354htr' },
      { 'brand': 'BMW', 'year': 2003, 'color': 'Blue', 'vin': 'j6w54qgh' },
      { 'brand': 'Mercedes', 'year': 1995, 'color': 'Orange', 'vin': 'hrtwy34' },
      { 'brand': 'Volvo', 'year': 2005, 'color': 'Black', 'vin': 'jejtyj' },
      { 'brand': 'Honda', 'year': 2012, 'color': 'Yellow', 'vin': 'g43gr' },
      { 'brand': 'Jaguar', 'year': 2013, 'color': 'Orange', 'vin': 'greg34' },
      { 'brand': 'Ford', 'year': 2000, 'color': 'Black', 'vin': 'h54hw5' },
      { 'brand': 'Fiat', 'year': 2013, 'color': 'Red', 'vin': '245t2s' }
    ];
  }

  ngOnInit() {

  }


  nodeSelect(event) {
    console.log(event);
  }

  nodeUnselect(event) {
    console.log(event);
  }
}
