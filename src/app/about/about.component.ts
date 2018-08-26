import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageTitle: string = "ABOUT ME";
  aboutMeDescription: string = `I am the tech-savvy, goal oriented, full-stack Dot Net Developer. I make beautiful, data-driven, dynamic, interactive websites and web applications using technology like Asp.Net MVC, Angular and SQL Server.
                              I help my boss tackle critical and complex web application problems in minimal time with superior quality code on daily basis.
                              I am an honest, detail oriented, responsible, easily approachable, lifelong learner and fun loving guy who enjoys his work and love to hang out with his family`;

  constructor() { }

  ngOnInit() {
  }

}
