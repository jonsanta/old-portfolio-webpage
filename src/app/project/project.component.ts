import { Component, OnInit, Input} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  @Input("vsrc") videoSRC : string;
  showVideo : boolean;
  safeSrc: SafeResourceUrl;

  @Input() buttonText : string[] = [];

  property : string;

  constructor(private sanitizer: DomSanitizer) {
    this.url = "";
    this.property = "";
    this.backgroundMode = "cover";
    this.title = "Default-Title";
    this.description = "Default-Description";
    this.repository ="";
    this.preview ="";
    this.buttonText = ["Preview", "Repository"];
    this.showVideo = false;
    this.videoSRC = "";
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("");
    
  }

  ngOnInit(): void {
      this.property = "url("+this.url+")";
      this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoSRC);
  }

  onClick(option : string): void{
    if(option == "repo") window.open("https://github.com/jonsanta/"+this.repository, "_blank");
    else if(option == "pre" && this.videoSRC == "") window.open(this.preview, "_blank");
    else if(option == "pre" && this.videoSRC != "") this.showVideo = true;
  }

  closeVideo(): void{
    this.showVideo = false;
  }
}
