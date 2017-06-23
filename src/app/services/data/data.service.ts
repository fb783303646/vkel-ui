import 'rxjs/add/operator/toPromise';

import { Headers, Http } from '@angular/http';

import { Car } from './../../models/car';
import { Injectable } from '@angular/core';
import { TreeNode } from './../../models/treenode';

@Injectable()
export class DataService {

  headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getFilesTree(): Promise<TreeNode[]> {
    return this.http
      .get('./assets/data/tree.json', this.headers)
      .map(res => res.json())
      .toPromise();
  }

  getCars(): Promise<Car[]> {
    return this.http
      .get('./assets/data/cars.json', this.headers)
      .map(res => res.json())
      .toPromise();
  }
}
