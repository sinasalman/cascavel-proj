import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamServiceService } from './team-service.service';
import { TeamInfo } from './TeamInfo/team';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit{
  constructor(private team:TeamServiceService){}
  list:TeamInfo[]=[];
  showList : boolean = false;
  selectedIndex: number = 0;
  ngOnInit(): void {
    this.list = this.team.teamList();
    
  }
  showprev(i:number){
    if(this.selectedIndex > 0){
      this.selectedIndex = i - 1;
    }

  }
  shownext(i:number){
    if(this.selectedIndex < this.list?.length -1){
      this.selectedIndex = i + 1;
    }

  }
  toggle(){
    this.showList = !this.showList;
  }
  
}
