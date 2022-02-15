import { trigger, state, style} from '@angular/animations';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'left-nav-item',
  templateUrl: './left-nav-bar-item.component.html',
  styleUrls: ['./left-nav-bar-item.component.css'],
  animations:[
    trigger('sectionScoped', [
      state('black', style({
      })),
      state('grey', style({
        'color': '#C0C0C0'
      }))
    ]),
  ]
})
export class LeftNavBarItemComponent implements OnInit, OnChanges {

  @Input() content : string;
  @Input() index : string;
  @Input() givenIndex : number;

  scoped : boolean;

  constructor() { 
    this.content = "";
    this.index = "";
    this.givenIndex = 0;
    this.scoped = false;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(parseInt(this.index) == this.givenIndex){
        this.scoped = true;
      }
      else{
        this.scoped = false;
      }
  }
}
