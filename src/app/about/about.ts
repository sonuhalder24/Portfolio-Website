import { Component, OnInit } from '@angular/core';
import { AboutInfo } from '../models/about.model';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit{
  
  about?:AboutInfo;

  constructor(private resumeService: ResumeService) {}
  
  ngOnInit(): void {
    this.resumeService.getAbutInfo().subscribe(data=>{
      this.about=data;
    });
  }
}
