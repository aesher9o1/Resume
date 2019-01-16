import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './home/landing/landing.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { SkillsComponent } from './home/skills/skills.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { AcheivementsComponent } from './home/acheivements/acheivements.component';
import { FooterComponent } from './home/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AcheivementsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }