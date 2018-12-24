import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coords',
  templateUrl: 'coords.component.html',
  styleUrls: ['./coords.component.sass']
})
export class CoordsComponent {
  @Input() mask: Array<string>;
  lat: string;
  lon: string;

  constructor() {
    this.lat = '';
    this.lon = '';
  }

  coords() {
    return this.lat + 'N ' + this.lon + 'E';
  }

  navigate() {
    window.location.href = 'comgooglemaps://?q=' + this.coords();
  }
}
