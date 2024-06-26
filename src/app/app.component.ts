import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isOpen: boolean = false;
  constructor(private _api: ApiCallService){
    
  }
  ngOnInit(): void {
    
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  closeDropdown() {
    this.isOpen = false;
  }
  title = 'crickscorerFrontend';
}
