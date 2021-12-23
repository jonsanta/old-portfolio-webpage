import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-logo-nav-bar-item',
  templateUrl: './logo-nav-bar-item.component.html',
  styleUrls: ['./logo-nav-bar-item.component.css']
})
export class LogoNavBarItemComponent implements OnInit {

  @Input() computer : boolean;
  @Input() buttonClicked : boolean;

  @Input() isClickedTrigger : string;

  @Output() clicked : EventEmitter<boolean>;

  constructor() {
    this.computer = true;
    this.isClickedTrigger = "normal"
    this.clicked = new EventEmitter();
    this.buttonClicked = false;
  }

  ngOnInit(): void {
  }

  onClick()
  {
    if(this.computer == false) this.clicked.emit(true);
  }

}
