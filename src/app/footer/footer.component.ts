import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  about: boolean = false;
  services: boolean = false;
  collab: boolean = false;
  setCollab() {
    this.about = false;
    this.collab = true;
    this.services = false;
  }
  setServices() {
    this.about = false;
    this.collab = false;
    this.services = true;

  }
  SetAbout() {
    this.about = true;
    this.collab = false;
    this.services = false;
    console.log(this.about, this.collab, this.services)
  }
  set = {
    "border ": " 1px solid rgb(115, 106, 22);",
    "cursor": "pointer;",
    "transform": " scale(1.2);",
    "background-color": " #191b08;"

  }
  notSet = {
    "border ": " 1px solid rgb(115, 106, 22);",
    "cursor": "pointer;",
    "transform": " scale(1.2);",
    "background-color": " #191b08;"
  }
}
