import { Component } from '@angular/core';
import { PersonalInfo } from '../models/personalInfo.model';
import { ResumeService } from '../services/resume.service';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule,CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  personalInfo? : PersonalInfo;
  isMenuOpen = false;
  
  constructor(private resumeService: ResumeService) {}
    ngOnInit(): void {
      this.resumeService.getPersonalInfo().subscribe(data=>{
        this.personalInfo=data;
      });
  }
  
  // Active section for smooth scrolling
  activeSection = 'home';
  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
       this.isMenuOpen = false;
    }
  }
}
