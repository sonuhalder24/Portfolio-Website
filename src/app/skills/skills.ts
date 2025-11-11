import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillInfo } from '../models/skill.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule,FormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills implements OnInit{
  skills?:SkillInfo;

  constructor(private resumeService: ResumeService){}
  ngOnInit(): void {
    this.resumeService.getSkills().subscribe(data=>{
      this.skills=data;
    })
  }

}
