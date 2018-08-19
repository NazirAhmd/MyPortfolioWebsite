import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = "Nazir Ahmad";
  jobDescription:string="Web Developer";
  linkendinLink:string="https://www.linkedin.com/in/nazir-ahmad-aa7983126/";
  githubLink:string="https://github.com/NazirAhmd";
  stackOverflowLink:string="https://stackoverflow.com/users/7474660/nazcinu";



  constructor() { }

  ngOnInit() {
  }

}
