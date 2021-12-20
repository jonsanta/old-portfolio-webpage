import { Component, OnInit, Input, HostListener} from '@angular/core';

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
