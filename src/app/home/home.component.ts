import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host:{
    '[style.height.px]': 'height'
  }
})
export class HomeComponent implements OnInit {

  height : number;
  constructor() {
    this.height = this.resizeHome();
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() : void{
    this.height = this.resizeHome();
  }

  //resizes Home to window height or default value if too small
  resizeHome() : number
  {
    if(document.documentElement.clientHeight > 700) return document.documentElement.clientHeight;
    else return 700;
  }

  //scrolls to navbar
  scrollToAnchor(){
    window.scrollTo({top: this.height+1, behavior: 'smooth'});
  }

}
