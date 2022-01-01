import { trigger, state, style} from '@angular/animations';
import { Component, OnInit, Input, HostListener, Output, EventEmitter} from '@angular/core';
import { Lang } from '../lang';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations:[
    trigger('menu', [
      state('closed', style({
        'height': '0px',
        'color': 'transparent',
        'pointer-events': 'none',
        'transition': 'height 200ms ease-in-out, color 100ms ease'
      })),
      state('openned', style({
        'height': '210px',
        'color': 'black',
        'pointer-events': 'auto',
        'transition': 'height 200ms ease-in-out, color 200ms cubic-bezier(0,0,0,-1)'
      }))
    ]),
  ]
})
export class NavBarComponent implements OnInit {
  sticky : boolean;
  isOpen : boolean;

  navbarButtons : string[] = [];

  @Input() computer : boolean;

  @Output() languageChanged : EventEmitter<boolean>;

  constructor() { 
    this.sticky = false;
    this.computer = true;
    this.isOpen = false;
    this.navbarButtons = Lang.getNavbarButtons();
    this.languageChanged = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() : void{
    if(!this.computer) this.isOpen = !this.isOpen;
  }

  //Instant scroll to given element by ID
  scrollToAnchor(id : string){
    let rect = document.querySelector(id)!.getBoundingClientRect().top;
    let scrollTop = document.documentElement.scrollTop-50;

    window.scrollTo({top: rect+scrollTop, behavior: 'smooth'});
    this.isOpen = false;

    /*
    //Jquery that will scroll to given ID tag in HTML -- JQUERY NOT NEEDED ANYMORE
    $('html, body').animate({
      scrollTop: $(id).offset()!.top -50
      }, 10);
    */
  }

  changeLanguage() : void {
    this.navbarButtons = Lang.getNavbarButtons();
    this.languageChanged.emit();
  }

  @HostListener('window:scroll', ['$event']) // window scroll event
  onScroll() : void {
    let height; 
    
    if(document.documentElement.clientHeight > 700) height = document.documentElement.clientHeight;
    else height = 700;

    if(document.documentElement.scrollTop >= height) this.sticky = true;
    else this.sticky = false;
  }

  @HostListener('window:resize', ['$event'])
  changeMenu() : void{
    if(this.computer) this.isOpen = false;
  }
}
