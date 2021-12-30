import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() name : string
  url : string;

  constructor() {
    this.name = "";
    this.url = "";
   }

  ngOnInit(): void {
    this.url ="assets/images/skill/"+this.name.toLowerCase()+".png";
  }

}
