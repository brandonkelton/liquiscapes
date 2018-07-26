import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  callPhoneNumber(): void {
    window.open('tel:3038611314', '_top');
  }

  ngOnInit() {
  }

}