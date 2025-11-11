import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeService } from './services/resume.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbar } from "./navbar/navbar";
import { About } from "./about/about";
import { ExperienceComponent } from "./experience/experience";
import { Skills } from "./skills/skills";
import { Projects } from "./projects/projects";
import { EducationCommon } from "./education/education";
import { Contact } from "./contact/contact";
import { Home } from "./home/home";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, Navbar, About, ExperienceComponent, Skills, Projects, EducationCommon, Contact, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  
}
