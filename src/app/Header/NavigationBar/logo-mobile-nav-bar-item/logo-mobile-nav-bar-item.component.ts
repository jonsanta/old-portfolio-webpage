import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-logo-mobile-nav-bar-item',
  templateUrl: './logo-mobile-nav-bar-item.component.html',
  styleUrls: ['./logo-mobile-nav-bar-item.component.css']
})
export class LogoMobileNavBarItemComponent implements OnInit {

  @Input() buttonClicked : boolean;

  @Input() isClickedTrigger : string;

  @Output() clicked : EventEmitter<boolean>;

  constructor() {
    this.isClickedTrigger = "normal"
    this.clicked = new EventEmitter();
    this.buttonClicked = false;
  }

  ngOnInit(): void {
  }

  onClick()
  {
    this.clicked.emit(true);
  }

}
