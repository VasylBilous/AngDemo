import { Component, OnInit } from '@angular/core';
import { Event } from '../event'
import { EventService } from '../EventService'

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  newName: string;
  newDate: string;
  newDescription: string;
  newImg: string;

  constructor(private service: EventService) { }

  ngOnInit() {
  }

  onSubmit() {
    const currentEvent = new Event(this.newName, this.newDate, this.newDescription, this.newImg);
    this.service.addEvent(currentEvent);
  }

}
