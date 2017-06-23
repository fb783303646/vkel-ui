import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputsComponent implements OnInit {
  text: string;
  disabled = true;

  constructor() { }

  ngOnInit() {
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

}
