import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nazir';

  highlightCurrentTopNavLink(link:any):void{
    link.classList.add('activeLink');
    console.log(link);
  }
}
