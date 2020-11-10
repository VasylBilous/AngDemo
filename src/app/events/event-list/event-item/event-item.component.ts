import { Component, Input, OnInit } from '@angular/core';
import {Event} from '../../event'

@Component({
  selector: 'event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() currentEvent: Event;
  isSelected:boolean = false;
  constructor() {}
  setSelected(){
    this.isSelected = !this.isSelected;
  }
  ngOnInit(): void { }
}
