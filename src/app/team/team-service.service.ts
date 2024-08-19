import { Injectable } from '@angular/core';
import { TeamInfo } from './TeamInfo/team';
@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor() { }
  teamList(): TeamInfo[]{ 
    return [
      {
        image: '../../assets/img/me.jpg',
        name:'Sina Salman',
        stack:'web Developer (Angular , Node JS)',
        description:'I love new challenges in my Life .',
      },
        {
        image: '../../assets/img/davari.jpg',
        name:'Sina Davari',
        stack:'designer',
        description:'I love Sina Salman',
      },   {
        image: '../../assets/img/mosofa.jpg',
        name:'Mostafa Gholami',
        stack:'web Developer/graphist',
        description:'I Love python',
      },
     
      {
        image: '../../assets/img/aboli.jpg',
        name:'Abolfazl Ghadiri',
        stack:'designer',
        description:'I Love figma',
      },
      {
        image: '../../assets/img/OB.jpg',
        name:'AmirReza Ajam',
        stack:'web Developer(Django)',
        description:'I Love huge dicks',
      }

  ]
  

  
}
   
  
}
