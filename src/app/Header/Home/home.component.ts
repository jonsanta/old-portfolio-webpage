import { Component, OnInit, Input, HostListener} from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() computer : boolean;

  height : number;
  constructor() {
    this.computer = true;
    this.height = this.resizeHome();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() : void{
    this.height = this.resizeHome();
  }

  resizeHome() : number
  {
    if(document.documentElement.clientHeight > 700) return document.documentElement.clientHeight;
    else return 700;
  }

  //Jquery that will scroll to given ID tag in HTML
  scrollToAnchor(id : String){
    $('html, body').animate({
      scrollTop: $(id).offset()!.top + 1
      }, 300);
  }

}
