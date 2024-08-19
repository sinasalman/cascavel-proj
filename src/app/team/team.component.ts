import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../team/team-service.service';
import { TeamInfo } from '../team/TeamInfo/team';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{
  constructor(private team: TeamServiceService) { }
  list: TeamInfo[] = [];
  selectedIndex: number = 0;
  ngOnInit(): void {
    this.list = this.team.teamList();

  }
  showprev(i: number) {
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }

  }
  shownext(i: number) {
    if (this.selectedIndex < this.list?.length - 1) {
      this.selectedIndex = i + 1;
    }

  }
 
}
