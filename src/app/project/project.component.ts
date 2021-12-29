import { trigger, state, style} from '@angular/animations';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations:[
    trigger('info', [
      state('close', style({
        'height': '0px',
        'color': 'transparent',
        'pointer-events': 'none',
        'transition': 'height 200ms ease-in-out, color 100ms ease'
      })),
      state('show', style({
        'height': '220px',
        'color': 'black',
        'pointer-events': 'auto',
        'transition': 'height 200ms ease-in-out, color 200ms cubic-bezier(0,0,0,-1)'
      }))
    ]),
  ]
})
export class ProjectComponent implements OnInit {

  @Input() url : string;

  constructor() { 
    this.url = "";
  }

  ngOnInit(): void {
  }

}
