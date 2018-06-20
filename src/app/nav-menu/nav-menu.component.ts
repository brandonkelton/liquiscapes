import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export function navBarReponsive() {
  var x = document.getElementById("liquiscapesTopNav");
  if (x.className === "topnav")
    x.className += " responsive";
  else
    x.className = "topnav";
}