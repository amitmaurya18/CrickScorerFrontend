import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table-wtc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table-wtc.component.html',
  styleUrl: './point-table-wtc.component.css'
})
export class PointTableWtcComponent implements OnInit{
  pointTableWTC: any;
  pointTableRow:any

  constructor(private _api: ApiCallService) {}
  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this._api.getWTC2025PointTable().subscribe({
      next: (data) => {
        this.pointTableWTC = data;
        console.log(this.pointTableWTC);        
        this.pointTableRow=[...this.pointTableWTC[0]]
        this.pointTableWTC=this.pointTableWTC.filter((item:any,index:any)=>index>0)
        console.log(this.pointTableRow); 
      },
    });
  }
}
