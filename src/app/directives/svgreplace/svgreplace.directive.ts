import 'rxjs/add/operator/map';

import { Directive, ElementRef, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[svgreplace]'
})
export class SvgreplaceDirective implements OnInit {

  constructor(private element: ElementRef, private http: Http) { }

  ngOnInit() {
    setTimeout(() => {

      const src = this.element.nativeElement.src;

      if (!src || src.indexOf('.svg') < 0) {
        throw new Error('only support for SVG images'); // return /*only support for SVG images*/;
      }

      this.http.get(src)
        .map(data => data.text())
        .subscribe(data => {
          this.element.nativeElement.outerHTML = data;
        });

    });
  }

}
