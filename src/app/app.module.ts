import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import {AddFormComponent} from './events/add-form/add-form.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventItemComponent } from './events/event-list/event-item/event-item.component'
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './events/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AddFormComponent,
    EventListComponent,
    EventItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
