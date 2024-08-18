import { Component } from '@angular/core';

@Component({
  selector: 'app-collabrate',
  templateUrl: './collabrate.component.html',
  styleUrls: ['./collabrate.component.scss']
})
export class CollabrateComponent {
  connection: boolean = false;
  connectionSet (){
    this.connection = !this.connection;
  }
  disconnect = {
    "transition":"700ms",
    "position":"absolute" 
  };
  connect = {
    "top":"0vh",
    "transition":"700ms"
  };
  connect1 = {
    "top":"42vh",
    "transition":"700ms"
  };
  disconnect1 = {
   
    "transition":"700ms",
    "position":"absolute"  
  };
}
