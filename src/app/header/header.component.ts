import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from './team-service.service';
import { TeamInfo } from './TeamInfo/team';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private team:TeamServiceService){}
  list:TeamInfo[]=[];
  showList : boolean = false;
  ngOnInit(): void {
    this.list = this.team.teamList();
  }
  teamFunck(){
    this.showList = !this.showList;
  }

}
