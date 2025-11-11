import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../models/personalInfo.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit{
  personalInfo?:PersonalInfo;

  constructor(private resumeService:ResumeService) {
    
  }
  ngOnInit(): void {
    this.resumeService.getPersonalInfo().subscribe(data=>{
      this.personalInfo=data;
    })
  }
  get mapUrl(): string {
    const loc = this.personalInfo?.location;
    if (!loc) return 'https://www.google.com/maps'; // fallback
    return 'https://www.google.com/maps?q=' + encodeURIComponent(loc);
  }
}
