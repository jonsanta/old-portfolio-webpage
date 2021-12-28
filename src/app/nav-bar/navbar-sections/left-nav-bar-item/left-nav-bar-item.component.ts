import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'left-nav-item',
  templateUrl: './left-nav-bar-item.component.html',
  styleUrls: ['./left-nav-bar-item.component.css']
})
export class LeftNavBarItemComponent implements OnInit {

  @Input() content : string;

  constructor() { 
    this.content = "";
  }

  ngOnInit(): void {
  }
}
