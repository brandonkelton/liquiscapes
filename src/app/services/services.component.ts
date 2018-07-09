import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  private expandText = 'Expand';
  private collapseText = 'Collapse';

  constructor() { }

  private _isWaterScapesExpanded: boolean = false;
  get isWaterScapesExpanded(): boolean {
    return this._isWaterScapesExpanded;
  }
  set isWaterScapesExpanded(x: boolean) {
    this._isWaterScapesExpanded = x;
  }
  isLiquiscapeYourLifeExpanded = false;

  toggleWaterScapesExpanded(): void {
    console.log(this.isWaterScapesExpanded);
    this.isWaterScapesExpanded = !this.isWaterScapesExpanded;
    console.log(this.isWaterScapesExpanded);
  }

  toggleLiquiscapeYourLifeExpanded(): void {
    this.isLiquiscapeYourLifeExpanded = !this.isLiquiscapeYourLifeExpanded;
  }

  get waterScapesExpansionText(): string {
    return this.isWaterScapesExpanded ? this.collapseText : this.expandText;
  }

  get liquiscapeYourLifeExpansionText(): string {
    return this.isLiquiscapeYourLifeExpanded ? this.collapseText : this.expandText;
  }

  ngOnInit() {
  }

}
