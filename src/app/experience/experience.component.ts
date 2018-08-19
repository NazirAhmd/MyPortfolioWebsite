import { Component, OnInit } from '@angular/core';
import { IExperience } from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  title: string = "EXPERIENCE";
  experiences: IExperience[] = [{
    companyName: "Deloitte",
    designationAndYearsActive: "Business Technology Analyst ( May 2017 – Present )",
    contributions: [
      "Developed more than forty web pages end to end individually as part of a complex Asp.Net MVC web application including UI design using Html and CSS, added dynamicity using JavaScript and jQuery, wrote server side controller action methods and business component methods in C# and finally leveraged LINQ and SQL to fetch/save data in database using Entity Framework.",
      "Stabilized the application by fixing 100s of complex bugs using Visual Studio debugging tools at server side and browser debugging tools at client side.",
      "Made application user friendly by adding features to capture Case notes, Application notes and Sticky notes.",
      "Added features to view the application in Read only mode thus allowing less privileged user to just see the application without doing any modification in data.",
      "Integrated three different WCF services on my three different web pages by configuring the Address, Binding, Contract of the service and generating a proxy class using WSDL.",
      "Developed a MVC based web application as part of firm initiative to map the values captured on UI to an excel sheet in a specified format thereby reducing the manual effort by 40%.",
      "Wrote unit test cases using NUnit to test my business component methods.",
      "Collaborated with other developers on my team using Team Foundation Server (TFS).",
      "Mentored Fresher’s in understanding the Application technically and functionally."
    ]
  },
  {
    companyName:"Cognizant Technology Solutions",
    designationAndYearsActive:"Programmer Analyst ( Jan 2016 - April 2017)",
    contributions:[
      "Developed an Asp.Net MVC web application to query SQL server and present data in a more readable format thereby reducing the time by 30% in figuring out the root cause of bugs.",
      "Developed an Asp.Net MVC web application to prepare a daily stats dashboard to display batch success/failure details thereby removing the manual effort and thus saving 2 hours per day.",
      "Developed a demo web application using Asp.Net Web Api and AngularJs for internal demo to leadership."
    ]
  }];

  constructor() { }

  ngOnInit() {
  }

}
