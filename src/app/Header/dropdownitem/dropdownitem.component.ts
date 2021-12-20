import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdownitem',
  templateUrl: './dropdownitem.component.html',
  styleUrls: ['./dropdownitem.component.css'],
})
export class DropdownitemComponent implements OnInit {

  @Input() content : string;

  constructor() { 
    this.content = "";
  }

  ngOnInit(): void {
  }
}
