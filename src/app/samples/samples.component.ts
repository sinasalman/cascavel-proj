import { Component } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent {
  W: boolean = false;
  D: boolean = true;
  G: boolean = false;
  setActiveG(){
    this.G =true;
    this.D = false;
    this.W = false;
  }
  setActiveD(){
    this.G =false;
    this.D = true;
    this.W = false;
  }
  setActiveW(){
    this.G =false;
    this.D = false;
    this.W = true;
  }
}
