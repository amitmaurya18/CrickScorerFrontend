import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table-ipl',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table-ipl.component.html',
  styleUrl: './point-table-ipl.component.css'
})
export class PointTableIplComponent implements OnInit{
  pointTableIPL: any;
  pointTableRow:any

  constructor(private _api: ApiCallService) {}
  ngOnInit(): void {
    this.loadTable();
  }
  loadTable() {
    this._api.getIPL2024PointTable().subscribe({
      next: (data) => {
        this.pointTableIPL = data;
        console.log(this.pointTableIPL);        
        this.pointTableRow=[...this.pointTableIPL[0]]
        this.pointTableIPL=this.pointTableIPL.filter((item:any,index:any)=>index>0)
        console.log(this.pointTableRow); 
      },
    });
  }

}
