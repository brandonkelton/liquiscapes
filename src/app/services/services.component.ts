import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
    trigger('expandCollapse', [
      // transition(':enter', [
      //   animate('500ms ease-in')
      // ]),
      // transition(':leave', [
      //   animate('500ms ease-out')
      // ]),
      // state('*', style({}))
      state('open', style({
          height: '*',
          opacity: 1
      })),
      state('close', style({
          height: '0px',
          opacity: 0
      })),
      transition('close => open', animate('500ms ease-in')),
      transition('open => close', animate('500ms ease-out'))
    ])
  ]
})
export class ServicesComponent implements OnInit {

  private expandText = 'More Information';
  private collapseText = 'Less Information';

  constructor() { }

  isWaterScapesExpanded = false;
  isLiquiscapeYourLifeExpanded = false;

  toggleWaterScapesExpanded(): void {
    this.isWaterScapesExpanded = !this.isWaterScapesExpanded;
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
