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
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GalleryModule } from  '@ngx-gallery/core';

import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './home/contact/contact.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { ProloaderComponent } from './proloader/proloader.component';
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
    ContactComponent,
    TestimonialsComponent,
    ProloaderComponent,
    
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
    GalleryModule.withConfig({ thumb: false,autoPlay: true,loadingStrategy:'preload',counterPosition:'bottom' }),
    ToastrModule.forRoot(),

    //Material
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
