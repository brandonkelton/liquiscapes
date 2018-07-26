import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  get smallMenuClasses(): string {
    return this._isVisible ? 'small-menu-popup' : 'small-menu-popup small-menu-hidden';
  }

  private _isVisible: boolean = false;

  toggleSmallMenuVisibility() {
    this._isVisible = !this._isVisible;
  }

  hideSmallMenu(): void {
    this._isVisible = false;
  }

  ngOnInit() {
  }

}
