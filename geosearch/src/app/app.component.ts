import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  degrees = [/\d/, /\d/, '°',/\d/,/\d/, "'",  /\d/, /\d/, '.', /\d/, /\d/, '"'];
  decimal = [/\d/, /\d/, '.',/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,];
  gpsType: string;

  constructor() {
    this.gpsType = 'degrees';
  }
}
