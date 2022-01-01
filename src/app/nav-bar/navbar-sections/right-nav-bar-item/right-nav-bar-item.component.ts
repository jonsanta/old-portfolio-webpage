import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'right-nav',
  templateUrl: './right-nav-bar-item.component.html',
  styleUrls: ['./right-nav-bar-item.component.css']
})
export class RightNavBarItemComponent implements OnInit {
  hover : boolean;
  
  @Output() languageChanged : EventEmitter<boolean>;

  constructor() { 
    this.setLang();
    this.languageChanged = new EventEmitter();
    this.hover = false;
  }

  ngOnInit(): void {
  }

  setLang() : void{
    if(document.documentElement.lang == "es"){
      this.hover = false;
    }
    else
    {
      this.hover = true;
    }
  }

  changeLang(language : string) : void{
    document.documentElement.lang = language;
    this.setLang();
    this.languageChanged.emit();
  }
}
