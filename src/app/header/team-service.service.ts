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
        image: '',
        name:'Sina Salman',
        stack:'programmer',
        description:'',
      },   {
        image: '',
        name:'Sina Davari',
        stack:'designer',
        description:'',
      },   {
        image: '',
        name:'Mostafa Gholami',
        stack:'programmer/graphist',
        description:'',
      },
      {
        image: '',
        name:'Fatemeh Rostami',
        stack:'programmer',
        description:'',
      }   ,
      {
        image: '',
        name:'Abolfazl Ghadiri',
        stack:'designer',
        description:'',
      }
  ]
  

  
}
   
  
}
