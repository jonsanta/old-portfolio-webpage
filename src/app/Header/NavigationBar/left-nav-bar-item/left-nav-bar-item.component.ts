import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav-bar-item',
  templateUrl: './left-nav-bar-item.component.html',
  styleUrls: ['./left-nav-bar-item.component.css'],
  animations:[
    trigger('hover',[
      state('normal', style({
      })),
      state('hovered', style({
      'color': '#C0C0C0',
      'cursor': 'pointer'
      })),
      transition('normal => hovered', animate('0.13s ease-in', keyframes([
        style({'cursor': 'pointer', offset: 0}),
        style({'color': '#A9A9A9' , offset: 0.5}),
        style({'color': '#C0C0C0', offset: 1})
      ]))),
      transition('hover => normal', animate('5s'))
    ])
  ]
})
export class LeftNavBarItemComponent implements OnInit {

  isHover : string;
  @Input() content : string;

  constructor() { 
    this.isHover = "normal";
    this.content = "";
  }

  ngOnInit(): void {
  }

  over(): void
  {
    this.isHover="hovered"
  }

  exit(): void
  {
    this.isHover="normal"
  }

}
