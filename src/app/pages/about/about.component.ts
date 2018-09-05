import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  callPhoneNumber(): void {
    window.open('tel:3038611314', '_top');
  }

  sendEmail(): void {
    window.open('mailto:dave@liquiscapes.com?subject=Consultation Request', '_top');
  }

}
