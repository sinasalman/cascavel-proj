import { Component, OnInit } from '@angular/core';
import { SamplesService } from './sampleService/samples.service';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {
  constructor(private SampleList : SamplesService){}
  
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
  etzi:string[] = [
    "1","2","3"
  ]
  sampleLists:any[] = [];
  ngOnInit(): void {
    this.SampleList.getSamples().subscribe(data => {
      this.sampleLists = data;
    })
    
  }
}
