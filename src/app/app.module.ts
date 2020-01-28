import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { AboutUsComponent } from './about-us/about-us.component';
import { SheduleComponent } from './shedule/shedule.component';
import { ContactComponent } from './contact/contact.component';
import { LecturersComponent } from './lecturers/lecturers.component';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { InviteComponent } from './invite/invite.component';
import { CompetitionSessionComponent } from './competition-session/competition-session.component';
import { TimetableComponent } from './timetable/timetable.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    SheduleComponent,
    ContactComponent,
    LecturersComponent,
    NavbarComponent,
    SponsorsComponent,
    FooterComponent,
    HomeComponent,
    InviteComponent,
    CompetitionSessionComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
