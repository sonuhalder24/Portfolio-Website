import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ProjectInfo } from '../models/project.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-projects',
  imports: [FormsModule,CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit{

  projects? : ProjectInfo[]; 

  constructor(private resumeService: ResumeService){}

   ngOnInit(): void {
     this.resumeService.getProjects().subscribe(data=>{
      this.projects=data;
     });
   }

}
