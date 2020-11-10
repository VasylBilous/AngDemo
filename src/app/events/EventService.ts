import { Event } from '../events/event'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class EventService {
  data: Event[] = [
    new Event(
      '.JS First',
      '12/01/2021',
      'https://res.cloudinary.com/practicaldev/image/fetch/s--v32CR_fp--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/vev6eo0v16an8fz36bw5.png',
      'Lorem ipsum'
    ),
    new Event(
      '.NET Conference',
      '12/12/2020',
      'https://www.dotnetfest.com/assets/img/sliders/9.jpg',
      'Lorem ipsum'
    ),
    new Event(
      'Hardkiss',
      '6/6/2022',
      'https://www.dotnetfest.com/assets/img/sliders/9.jpg',
      'Lorem ipsum'
    ),
    new Event(
      'Web conference',
      '31/12/2020',
      'https://www.dotnetfest.com/assets/img/sliders/9.jpg',
      'Lorem ipsum'
    ),
  ];

  getAllEvents(): Event[] {
    return this.data;
  }

  addEvent(event: Event) {
    this.data.push(event);
  }

}
