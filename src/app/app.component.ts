import { Component, ElementRef, ViewChild, TemplateRef, HostListener, Renderer2, ViewChildren, Directive, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '.nav-link'
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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
}

