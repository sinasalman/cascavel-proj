import { Component, OnInit } from '@angular/core';
import { SamplesService } from './sampleService/samples.service';
import { sampleType } from '../shared/sample';
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
  designList:sampleType[] = [];
  webAppList:sampleType[] = [];
  graphicList:sampleType[] = [];
  i: number = 0;
  sampleLists:sampleType[] = [];
  ngOnInit(): void {
    this.SampleList.getSamples().subscribe(data => {
      this.sampleLists = data;
    })
    for(this.i=0;this.i<this.sampleLists.length;this.i++){
      console.log("hi");
      if(this.sampleLists[this.i].category === 1 ){
        this.designList.push(this.sampleLists[this.i]);
        console.log(this.sampleLists[this.i].category)
        console.log("hi");
      }else if(this.sampleLists[this.i].category === 2){
        this.graphicList.push(this.sampleLists[this.i]);
      }else {
        this.webAppList.push(this.sampleLists[this.i]);
      }
    }
  }

 

}
