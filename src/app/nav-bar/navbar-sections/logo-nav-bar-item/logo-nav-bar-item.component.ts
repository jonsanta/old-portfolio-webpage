import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'logo-nav',
  templateUrl: './logo-nav-bar-item.component.html',
  styleUrls: ['./logo-nav-bar-item.component.css']
})
export class LogoNavBarItemComponent implements OnInit {

  @Input() computer : boolean;

  constructor() {
    this.computer = true;
  }

  ngOnInit(): void {
  }
}
