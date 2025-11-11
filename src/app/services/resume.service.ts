import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PersonalInfo } from '../models/personalInfo.model';
import { AboutInfo } from '../models/about.model';
import { ExperienceInfo } from '../models/experience.model';
import { SkillInfo } from '../models/skill.model';
import { ProjectInfo } from '../models/project.model';
import { EducationInfo } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private personJsonUrl = 'assets/personal-info.json';
  private aboutJsonUrl='assets/about.json';

  constructor(private http: HttpClient) {}

  getPersonalInfo(): Observable<PersonalInfo> {
    return this.http.get<PersonalInfo>(this.personJsonUrl);
  }

  getAbutInfo(): Observable<AboutInfo> {
    return this.http.get<AboutInfo>(this.aboutJsonUrl);
  }

  getExperiences(): Observable<ExperienceInfo[]> {
    return this.http.get<ExperienceInfo[]>('assets/experience.json');
  }

  getSkills(): Observable<SkillInfo> {
    return this.http.get<SkillInfo>('assets/skill.json');
  }
  getProjects(): Observable<ProjectInfo[]> {
    return this.http.get<ProjectInfo[]>('assets/projects.json');
  }

  getEducation(): Observable<EducationInfo[]> {
    return this.http.get<EducationInfo[]>('assets/education.json')
  }
}