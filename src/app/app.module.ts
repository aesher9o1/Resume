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

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AcheivementsComponent,
    FooterComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,        

    //Material
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
