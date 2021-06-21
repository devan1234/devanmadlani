import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = ["Angular", "Typescipt", "Agile", "Nodejs", "Git", "Bootstrap", "AngularJs", "HTML", "CSS", "Jquery", "Javascript", "Java"]
  constructor() { }

  ngOnInit(): void {
  }

}
