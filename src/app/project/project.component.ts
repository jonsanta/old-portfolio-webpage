import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() url : string;
  constructor() { 
    this.url = "";
  }

  ngOnInit(): void {
  }

}
