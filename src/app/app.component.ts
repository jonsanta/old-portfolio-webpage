import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fixedWidth : number;

  constructor()
  {
    this.fixedWidth = this.resize();
  }

  @HostListener('window:resize', ['$event'])//On Resize event
  onResize(): void{
    this.fixedWidth = this.resize();
  }

  //Fixes the page width taking care of the vertical page scrollbar
  resize() : number{
    return window.innerWidth -(window.innerWidth - document.body.clientWidth);
  }
}
