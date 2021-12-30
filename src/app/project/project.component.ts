import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() url : string;
  @Input("ts") initialTransformScale : string;
  @Input("ats") animationTransformScale : string;
  trfS : string;

  constructor() { 
    this.url = "";
    this.initialTransformScale = "scale(1)";
    this.trfS = this.initialTransformScale;
    this.animationTransformScale = "scale(1.5)";
  }

  ngOnInit(): void {
    this.trfS = this.initialTransformScale;
  }

  show(): void{
    this.trfS = this.animationTransformScale;
  }

  close(): void{
    this.trfS = this.initialTransformScale;
  }

}
