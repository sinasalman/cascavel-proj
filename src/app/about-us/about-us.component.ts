import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  info: boolean = true;
  webInfo : boolean = false;
  infoOn() {
    this.info = true;
    this.webInfo = false;
  }
  WebInfoOn() {
    this.info = false;
    this.webInfo = true;
  }
}
