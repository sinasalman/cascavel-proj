import { Component, OnInit } from '@angular/core';
import { SamplesService } from './sampleService/samples.service';
import { image, sampleType } from '../shared/sample';
@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss'],
})
export class SamplesComponent implements OnInit {
  constructor(private SampleList: SamplesService) {}
  
  W: boolean = false;
  D: boolean = true;
  G: boolean = false;
  setActiveG() {
    this.G = true;
    this.D = false;
    this.W = false;
  }
  setActiveD() {
    this.G = false;
    this.D = true;
    this.W = false;
  }
  setActiveW() {
    this.G = false;
    this.D = false;
    this.W = true;
  }
  selectedIndex = 0;
  showprev(i: number) {
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }

  }
  shownext(i: number) {
    if (this.selectedIndex < this.designList.length - 1) {
      this.selectedIndex = i + 1;
    }
  }
  isExpanded = false
  SizeChange(){
    this.isExpanded = !this.isExpanded

  }
  designList: sampleType[] = [{
    title: 'Design 1',
    body: 'This is the first design.',
    category: 1,
    images: [
      { image: '../assets/webPage.png' },
      { image: 'image1b.jpg' }
    ]
  },
  {
    title: 'Design 2',
    body: 'This is the second design.',
    category: 2,
    images: [
      { image: '../assets/img/sample1png.png' },
      { image: 'image2b.jpg' }
    ]
  },
  {
    title: 'Design 3',
    body: 'This is the third design.',
    category: 3,
    images: [
      { image: '../assets/img/sample2.jpg' },
      { image: 'image3b.jpg' }
    ]
  },
  {
    title: 'Design 4',
    body: 'This is the fourth design.',
    category: 4,
    images: [
      { image: '../assets/img/sample3png.png' },
      { image: 'image4b.jpg' }
    ]
  },
  {
    title: 'Design 5',
    body: 'This is the fifth design.',
    category: 5,
    images: [
      { image: '../assets/webPage.png' },
      { image: 'image5b.jpg' }
    ]
  }
];

  webAppList: sampleType[] = [];
  graphicList: sampleType[] = [];
  
  

  i: number = 0;
  baseURL: string = 'https://cascavelsampleuploder.liara.run';
  ngOnInit(): void {
    //   this.SampleList.getSamples().subscribe((data: sampleType[]) => {
    //     this.designList = data
    //       .filter((item: sampleType) => item.category === 3)
    //       .map((item) => {
    //         item.images = item.images.map((img: image) => {
    //           img.image = `${this.baseURL}${img.image}`;
    //           return img;
    //         });
    //         return item;
    //       });
    //     this.webAppList = data
    //       .filter((item: sampleType) => item.category === 1)
    //       .map((item) => {
    //         item.images = item.images.map((img: image) => {
    //           img.image = 'https://cascavelsampleuploder.liara.run' + img.image;
    //           return img;
    //         });
    //         return item;
    //       });
    //     this.graphicList = data
    //       .filter((item: sampleType) => item.category === 2)
    //       .map((item) => {
    //         item.images = item.images.map((img: image) => {
    //           img.image = 'https://cascavelsampleuploder.liara.run' + img.image;
    //           return img;
    //         });
    //         return item;
    //       });
    //   });
  }
}
