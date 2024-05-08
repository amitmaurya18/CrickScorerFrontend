import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  loading=false
  allMatches: any;
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this.loadMatchHistory()
  }

  loadMatchHistory(){

    this._api.getAllMatches()
    .subscribe({
      next:data=>{
        this.allMatches=data;
      }
    })

  }
}
