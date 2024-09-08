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
  text4: string ="API";
  cards = {
    "transition" : "1000ms"
    
  }
  txt1(){
    this.text1 = "Graphic"
  }
  nottxt1(){
    this.text1 = "Graphic"
  }
  txt2(){
    this.text2 = "UI/UX Design "
  }
  nottxt2(){
    this.text2 = "UI/UX Design"
  }
  txt3(){
    this.text3 = "web-App"
  }
  nottxt3(){
    this.text3 = "Web-App"
  }
  txt4(){
    this.text4 = "API"
  }
  nottxt4(){
    this.text4 = "Api"
  }
}
