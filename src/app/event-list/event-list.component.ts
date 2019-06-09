import { Component, OnInit } from '@angular/core';
/* Models */
import { Event } from '../models/event';

/* Create an event array */
const EVENTS: Event[] = [
  {
    id: '0',
    title: 'Introduction to JS - basic',
    location: 'Barcelona',
    date: new Date('2020-03-16'),
    // tslint:disable-next-line: max-line-length
    description: 'Nulla aliqua duis adipisicing do amet et ullamco commodo id laborum nulla ipsum culpa. Lorem ipsum commodo quis amet consequat nostrud esse est deserunt. Laboris incididunt esse amet sunt tempor pariatur nisi irure nulla veniam id quis elit. Velit officia quis veniam aliqua. Cupidatat velit enim officia dolor ea veniam proident culpa ea duis labore nostrud. Occaecat in velit esse et. Duis anim ad elit ipsum occaecat Lorem veniam labore consequat laboris non.',
    addedBy: 'user01'

  },
  {
    id: '1',
    title: 'Introduction to Angular',
    location: 'London',
    date: new Date('2019-10-28'),
    // tslint:disable-next-line: max-line-length
    description: 'Nulla aliqua duis adipisicing do amet et ullamco commodo id laborum nulla ipsum culpa. Lorem ipsum commodo quis amet consequat nostrud esse est deserunt. Laboris incididunt esse amet sunt tempor pariatur nisi irure nulla veniam id quis elit. Velit officia quis veniam aliqua. Cupidatat velit enim officia dolor ea veniam proident culpa ea duis labore nostrud. Occaecat in velit esse et. Duis anim ad elit ipsum occaecat Lorem veniam labore consequat laboris non.',
    addedBy: 'user01'
  },
  {
    id: '2',
    title: 'Introduction to RXJS',
    location: 'London',
    date: new Date('2019-10-02'),
    // tslint:disable-next-line: max-line-length
    description: 'Nulla aliqua duis adipisicing do amet et ullamco commodo id laborum nulla ipsum culpa. Lorem ipsum commodo quis amet consequat nostrud esse est deserunt. Laboris incididunt esse amet sunt tempor pariatur nisi irure nulla veniam id quis elit. Velit officia quis veniam aliqua. Cupidatat velit enim officia dolor ea veniam proident culpa ea duis labore nostrud. Occaecat in velit esse et. Duis anim ad elit ipsum occaecat Lorem veniam labore consequat laboris non.',
    addedBy: 'user01'
  },
  {
    id: '3',
    title: 'AWS',
    location: 'Berlin',
    date: new Date('2019-11-21'),
    // tslint:disable-next-line: max-line-length
    description: 'Nulla aliqua duis adipisicing do amet et ullamco commodo id laborum nulla ipsum culpa. Lorem ipsum commodo quis amet consequat nostrud esse est deserunt. Laboris incididunt esse amet sunt tempor pariatur nisi irure nulla veniam id quis elit. Velit officia quis veniam aliqua. Cupidatat velit enim officia dolor ea veniam proident culpa ea duis labore nostrud. Occaecat in velit esse et. Duis anim ad elit ipsum occaecat Lorem veniam labore consequat laboris non.',
    addedBy: 'user01'
  },
  {
    id: '4',
    title: 'Angular NgRx - introduction',
    location: 'Madrid',
    date: new Date('2019-12-05'),
    // tslint:disable-next-line: max-line-length
    description: 'Nulla aliqua duis adipisicing do amet et ullamco commodo id laborum nulla ipsum culpa. Lorem ipsum commodo quis amet consequat nostrud esse est deserunt. Laboris incididunt esse amet sunt tempor pariatur nisi irure nulla veniam id quis elit. Velit officia quis veniam aliqua. Cupidatat velit enim officia dolor ea veniam proident culpa ea duis labore nostrud. Occaecat in velit esse et. Duis anim ad elit ipsum occaecat Lorem veniam labore consequat laboris non.',
    addedBy: 'user01'
  }
];

@Component({
  selector: 'oevents-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  /* Create a property to save Events array */
  events = EVENTS;
  /* Create a property to contain the selected event */
  selectedEvent = EVENTS[0];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method to know which event is selected
   * @param event: selected event
   */
  onSelectEvent(event: Event) {
    this.selectedEvent = event;
  }

}
