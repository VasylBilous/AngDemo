import { Component, OnInit } from '@angular/core';
import {EventService} from '../EventService'
import {Event} from '../event'

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})

export class EventListComponent implements OnInit {
  constructor(private service: EventService) {  }
  events: Event[];

  ngOnInit(): void {
    this.events = this.service.getAllEvents();
  }

}
