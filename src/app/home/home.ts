import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../models/personalInfo.model';
import { AboutInfo } from '../models/about.model';
import { HttpClientModule } from '@angular/common/http';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-home',
  imports: [HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  personalInfo?: PersonalInfo;
  about?:AboutInfo;

  constructor(private resumeService: ResumeService) {}
  ngOnInit(): void {
    this.resumeService.getPersonalInfo().subscribe(data=>{
      this.personalInfo=data;
    });

    this.resumeService.getAbutInfo().subscribe(data=>{
      this.about=data;
    });
  }
  

  activeSection = 'home';
  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Dipa_Halder_Resume.pdf'; // ✅ path to your resume
    link.download = 'Dipa_Halder_Resume.pdf'; // filename user will see
    link.click();
  }
}
