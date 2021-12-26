import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener, Input} from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
  animations:[
    trigger('dropDown', [
      state('notvisible', style({
          'visibility': 'hidden',
          'transform': 'translateY(-10em)',
          'z-index': '0',
          'color': 'transparent'
      })),
      state('visible', style({
        'visibility': 'visible',
        'transform': 'translateY(3.40em)',
        'z-index': '1'
      })),
      transition('notvisible => visible', animate('0.23s ease-in', keyframes([
        style({'visibility': 'hidden','transform': 'translateY(-10em)', offset: 0}),
        style({'visibility': 'visible','transform': 'translateY(3.40em)', offset: 0.9999}),
        style({'z-index': '1', 'color': 'black', offset: 1})
      ]))),
      transition('visible => notvisible', animate('0.23s ease-in', keyframes([
        style({'visibility': 'visible','transform': 'translateY(3.40em)', offset: 0}),
        style({'color': 'transparent' , offset: 0.7}),
        style({'visibility': 'hidden','transform': 'translateY(-10em)', offset: 0.99}),
        style({'z-index': '0', offset: 1})
      ])))
    ]),
    
    trigger('dropDownBar', [
      state('notvisible', style({
        'box-shadow': '1px 1px 10px 1.8px rgba(0, 0, 0, 0.4)'
      })),
      state('visible', style({
        'box-shadow': '0px 0px 0px 0px rgba(0, 0, 0, 0)'
      })),
      transition('notvisible => visible', animate('0.23s ease-in', keyframes([
        style({'box-shadow': '1px 1px 10px 1.8px rgba(0, 0, 0, 0.4)', offset: 0}),
        style({'box-shadow': '1px 1px 10px 1.8px rgba(185, 185, 185, 0.4)', offset: 0.3}),
        style({'box-shadow': '0px 0px 0px 0px rgba(0, 0, 0, 0)', offset: 0.6})
      ]))),
      transition('visible => notvisible', animate('0.23s ease-in', keyframes([
        style({'box-shadow': '1px 1px 10px 1.8px rgba(0, 0, 0, 0.4)', offset: 1})
      ]))),
    ])
  ]
})
export class Navbar implements OnInit{

  desplegableState : string;
  desplegableButtonColor: string;

  banner : boolean;

  @Input() computer : boolean;

  dropdownshown : boolean;

  constructor() { 
    this.banner = false;
    this.computer = true;
    this.dropdownshown = false;

    this.desplegableState = "notvisible";
    this.desplegableButtonColor = "normal";
  }

  ngOnInit(): void {
    this.detectMobile();
  }

  dropdown(): void
  {
    this.desplegableState = "notvisible";
    this.desplegableButtonColor = "normal";
    this.dropdownshown = false;
  }

  openMenu() : void
  {
    if(this.desplegableState == "notvisible" && !this.computer) 
    {
      this.desplegableState = "visible"
      this.desplegableButtonColor = "hovered";
      this.dropdownshown = true;
    }
    else 
    {
      this.desplegableState = "notvisible";
      this.desplegableButtonColor = "normal";
      this.dropdownshown = false;
    }
  }

  //Instant scroll to given element by ID
  scrollToAnchor(id : string){
    let rect = document.querySelector(id)!.getBoundingClientRect().top;
    let scrollTop = document.documentElement.scrollTop-50;

    window.scrollTo({top: rect+scrollTop, behavior: 'smooth'});

    /*
    //Jquery that will scroll to given ID tag in HTML -- JQUERY NOT NEEDED ANYMORE
    $('html, body').animate({
      scrollTop: $(id).offset()!.top -50
      }, 10);
    */
  }

  @HostListener('window:scroll', ['$event']) // window scroll event
  onScroll() : void {
    let height; 
    
    if(document.documentElement.clientHeight > 700) height = document.documentElement.clientHeight;
    else height = 700;

    if(document.documentElement.scrollTop >= height) this.banner = true;
    else this.banner = false;
  }

  @HostListener('window:resize', ['$event'])
  whenResized() : void
  {
    if(this.computer)
    {
      this.dropdownshown =false;
      this.desplegableState = "notvisible";
      this.desplegableButtonColor = "normal";
    }
  }


  detectMobile() : void{ //enables mobile mode for low width devices
    if(window.innerWidth < 900) this.computer = false;
    else{
      this.computer = true
      this.dropdownshown = false;
      this.desplegableState = "notvisible";
      this.desplegableButtonColor = "normal";
    }

    /* DETECTS IF MOBILE DEVICE BROWSER
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
      return check;
      */
  }
}

