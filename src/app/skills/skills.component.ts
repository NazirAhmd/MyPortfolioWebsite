import { Component, OnInit } from '@angular/core';
import { ISkill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  title: string = "SKILLS";
  skills: ISkill[] = [{
    "name": "Asp.Net MVC",
    "level": 85
  },
  {
    "name": "C#",
    "level": 90
  },
  {
    "name": "SQL",
    "level": 80
  },
  {
    "name": "JavaScript",
    "level": 70
  },
  {
    "name": "jQuery",
    "level": 75
  },
  {
    "name": "Html",
    "level": 70
  },
  {
    "name": "CSS",
    "level": 60
  },
  {
    "name": "Entity Framework",
    "level": 70
  },
  {
    "name": "Angular",
    "level": 65
  },
  {
    "name": "TFS",
    "level": 55
  },
  {
    "name": "Git",
    "level": 50
  },
  {
    "name": "Microsoft Azure",
    "level": 40
  }
];

  constructor() { }

  ngOnInit() {
  }

}
