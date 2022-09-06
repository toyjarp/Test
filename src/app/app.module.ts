import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchpadDashComponent } from './launchpad-dash/launchpad-dash.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTreeModule} from '@angular/material/tree';
import { ChartModule} from 'primeng/chart'
import { CardModule} from 'primeng/card';
import { TimelineModule} from 'primeng/timeline'
import { LunchOverTimeComponent } from './lunch-over-time/lunch-over-time.component';
import { LaunchTimelineComponent } from './launch-timeline/launch-timeline.component';
import { LaunchpadLocComponent } from './launchpad-loc/launchpad-loc.component';
import {GMapModule} from 'primeng/gmap';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LaunchpadDashComponent,
    LunchOverTimeComponent,
    LaunchTimelineComponent,
    LaunchpadLocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ChartModule,
    TimelineModule,
    HttpClientModule,
    GMapModule,
    ScrollPanelModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
