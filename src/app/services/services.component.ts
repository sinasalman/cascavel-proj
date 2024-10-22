import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  text1: string = "Graphic";
  text2: string = "UI/UX Design";
  text3: string ="Web-App";
  text4: string ="Other Services...";
  cards = {
    "transition" : "1000ms"
    
  }
  
}
