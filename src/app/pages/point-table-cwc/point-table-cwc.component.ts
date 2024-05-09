import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table-cwc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table-cwc.component.html',
  styleUrl: './point-table-cwc.component.css'
})
export class PointTableCwcComponent implements OnInit{
  pointTableCWC: any;
  pointTableRow:any

  constructor(private _api: ApiCallService) {}
  ngOnInit(): void {
    this.loadTable();
  }

  loadTable() {
    this._api.getCWC2023PointTable().subscribe({
      next: (data) => {
        this.pointTableCWC = data;
        console.log(this.pointTableCWC);        
        this.pointTableRow=[...this.pointTableCWC[0]]
        this.pointTableCWC=this.pointTableCWC.filter((item:any,index:any)=>index>0)
        console.log(this.pointTableRow); 
      },
    });
  }
}
