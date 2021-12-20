import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jon';

  fixedWidth : number;

  constructor()
  {
    this.fixedWidth = this.resize();
  }

  @HostListener('window:resize', ['$event']) //r
  onResize(): void{
    this.fixedWidth = this.resize();
  }

  resize() : number{
    return window.innerWidth -(window.innerWidth - document.body.clientWidth);
  }
}
