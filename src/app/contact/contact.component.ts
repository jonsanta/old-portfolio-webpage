import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() title : string;

  constructor() {
    this.title = "CONTACTO";
  }

  ngOnInit(): void {
  }

  OnClick($event : any)
  { 
    if($event.target.id == "email")
    {
      window.open("mailto:someemail@server.com?Subject=Job Contact", "_blank");
    }
    else if($event.target.id == "linkedin")
    {
      window.open("https://www.linkedin.com", "_blank");
    }
    else if($event.target.id == "github")
    {
      window.open("https://github.com", "_blank");
    }
  }

}
