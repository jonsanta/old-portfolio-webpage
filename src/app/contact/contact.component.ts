import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  OnClick($event : any)
  { 
    if($event.target.id == "email")
    {
      window.open("mailto:contact@jonsz.com?Subject=Job Contact", "_blank");
    }
    else if($event.target.id == "linkedin")
    {
      window.open("https://www.google.es", "_blank");
    }
    else if($event.target.id == "github")
    {
      window.open("https://github.com/jonsanta", "_blank");
    }
  }

}
