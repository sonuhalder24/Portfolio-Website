import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../models/personalInfo.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit{
  personalInfo?:PersonalInfo;// =new  PersonalInfo();

  constructor(private resumeService:ResumeService){}
  ngOnInit(): void {
    this.resumeService.getPersonalInfo().subscribe(data=>{
      this.personalInfo=data;
    })
  }

}
