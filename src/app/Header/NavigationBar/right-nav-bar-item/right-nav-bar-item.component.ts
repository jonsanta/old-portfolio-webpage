import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-nav-bar-item',
  templateUrl: './right-nav-bar-item.component.html',
  styleUrls: ['./right-nav-bar-item.component.css']
})
export class RightNavBarItemComponent implements OnInit {

  @Input() computer: boolean;
  @Input() stickyMode: boolean;

  constructor() { 
    this.computer = false;
    this.stickyMode = false;
  }

  ngOnInit(): void {
  }

}
