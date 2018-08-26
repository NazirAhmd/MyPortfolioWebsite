import { Directive, OnChanges, ElementRef, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[nav-link]'
  })
  export class NavigationDir implements OnChanges {
  
    constructor(private element: ElementRef, private renderer: Renderer2) {
  
    }
  
    @Input() clickedLinkText:string;
  
    ngOnChanges(){
      this.renderer.removeClass(this.element.nativeElement,"activeLink");
      if(this.element.nativeElement.innerText==this.clickedLinkText){
        this.renderer.addClass(this.element.nativeElement,"activeLink");
      }    
    }
  }