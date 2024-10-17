import { Component, OnInit } from '@angular/core';
import { SamplesService } from './sampleService/samples.service';
import { image,sampleType } from '../shared/sample';
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
  baseURL: string ='https://cascavelsampleuploder.liara.run';
  ngOnInit(): void {
    this.SampleList.getSamples().subscribe((data:sampleType[]) => {
      this.designList = data.filter((item:sampleType)=>item.category===3).map(item => {item.images = item.images.map((img:image)=>{img.image = `${this.baseURL}${img.image}`;
       return img;})
      return item;
    });

      this.webAppList = data.filter((item:sampleType)=>item.category===1).map(item => {item.images = item.images.map((img:image)=>{img.image = 'https://cascavelsampleuploder.liara.run'+img.image ;
      return img;})
     return item;
   });;
      this.graphicList = data.filter((item:sampleType)=>item.category===2).map(item => {item.images = item.images.map((img:image)=>{img.image ='https://cascavelsampleuploder.liara.run'+img.image;
      return img;})
     return item;
   });;
    })
    
  }

 

}
