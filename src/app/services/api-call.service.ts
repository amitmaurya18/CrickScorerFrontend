import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }
  getAllMatches(){
    return this._httpClient.get(`${environment.apiUrl}/match`)
  }
  getLiveMatchScores(){
    return this._httpClient.get(`${environment.apiUrl}/match/live`)
  }
  getCWC2023PointTable(){
    return this._httpClient.get(`${environment.apiUrl}/match/point-table-cwc`)
  }
  getIPL2024PointTable(){
    return this._httpClient.get(`${environment.apiUrl}/match/point-table-ipl`)
  }
  getWTC2025PointTable(){
    return this._httpClient.get(`${environment.apiUrl}/match/point-table-wtc`)
  }
}
