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
        stack:'programmer',
        description:'',
      },
        {
        image: '../../assets/img/davari.jpg',
        name:'Sina Davari',
        stack:'designer',
        description:'',
      },   {
        image: '../../assets/img/mosofa.jpg',
        name:'Mostafa Gholami',
        stack:'programmer/graphist',
        description:'',
      },
     
      {
        image: '../../assets/img/aboli.jpg',
        name:'Abolfazl Ghadiri',
        stack:'designer',
        description:'',
      }
  ]
  

  
}
   
  
}
