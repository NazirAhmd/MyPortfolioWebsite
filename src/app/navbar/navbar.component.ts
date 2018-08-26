import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  title: string = 'Nazir';
  selectedAnchorText: string = "Home";

  onNavLinkClicked(clickedElement) {
    this.selectedAnchorText = clickedElement.innerText;
  }
}
