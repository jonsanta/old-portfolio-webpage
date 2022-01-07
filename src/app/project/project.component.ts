import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() url : string;
  @Input("bgmode") backgroundMode : string;
  @Input("title") title : string;
  @Input("desc") description : string;
  @Input("repo") repository : string;
  @Input("pre") preview : string;

  @Input() buttonText : string[] = [];

  property : string;

  constructor() {
    this.url = "";
    this.property = "";
    this.backgroundMode = "cover";
    this.title = "Default-Title";
    this.description = "Default-Description";
    this.repository ="";
    this.preview ="";
    this.buttonText = ["Preview", "Repository"];
  }

  ngOnInit(): void {
      this.property = "url("+this.url+")";
  }

  onClick(option : string): void{
    if(option == "repo") window.open("https://github.com/"+this.repository, "_blank");
    else if(option == "pre") window.open(this.preview, "_blank");
  }
}
