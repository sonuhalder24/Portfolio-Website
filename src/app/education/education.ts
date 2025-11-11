import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EducationInfo } from '../models/education.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-education',
  imports: [FormsModule,CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class EducationCommon implements OnInit{
  education?:EducationInfo[];

  constructor(private resumeService:ResumeService) {
    
  }
  ngOnInit(): void {
    this.resumeService.getEducation().subscribe(data=>{
      this.education=data;
    })
  }
  
}
