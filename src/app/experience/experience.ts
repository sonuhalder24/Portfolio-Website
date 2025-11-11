import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExperienceInfo } from '../models/experience.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule,FormsModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
   experience?:ExperienceInfo[];

  constructor(private resumeService:ResumeService){}
  ngOnInit(): void {
  this.resumeService.getExperiences().subscribe(data => {
    this.experience = data;
  });
}

}
