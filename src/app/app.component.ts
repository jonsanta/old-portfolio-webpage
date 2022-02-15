import { Component, HostListener, OnInit} from '@angular/core';
import { Lang } from './lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  computer : boolean;
  aboutme : string[] = [];
  projectText : string[] = []
  contact : string = "CONTACT";
  buttonText : string[] = [];
  footerText : string = "Developed and designed by Jon Santamaria Zamora.";

  selectedSection : number = 0;

  constructor()
  {
    this.computer = true;
    if(navigator.language == "es") document.documentElement.lang = "es";
    else if(navigator.language != "") document.documentElement.lang = "en";
    else document.documentElement.lang = "es";
    this.changeLanguage();
  }

  ngOnInit(): void {
    this.detectMobile();
    this.getSection();
  }

  changeLanguage() : void {
    this.aboutme = Lang.getAboutMe();
    this.projectText = Lang.getprojectText();
    this.contact = Lang.getContact();
    this.buttonText = Lang.getProjectButtons();
    this.footerText = Lang.getFooter();
  }

  @HostListener('window:scroll', ['$event']) // window scroll event
  getSection() : void{
    let sections : string[] = ["home", "aboutme", "projects", "contact"];
    for(let x = 0; x < sections.length; x++)
    {
      let elementRect = document.getElementById(sections[x])!.getBoundingClientRect();
      if(elementRect.top >= -200 && elementRect.top <= 150)
      {
        this.selectedSection = x; //highlight the spotted section name on navbar
        if(document.getElementById(sections[3])!.getBoundingClientRect().top < 620)
          this.selectedSection = 3; //force contact to highlight
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  detectMobile() : void{ //enables mobile mode for low width devices
    if(window.innerWidth < 900) this.computer = false;
    else{
      this.computer = true
    }
  }
}
