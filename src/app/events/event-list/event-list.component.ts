import { Component, OnInit } from '@angular/core';
/* Models */
import { Event } from '../../models/event';
/* Services */
import { EventService } from '../../core/event.service';

@Component({
  selector: 'oevents-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  /* Property to save Events */
  events: Event[];
  /* Property which contains the selected event */
  selectedEvent: Event;
  /* Property which contains the table columns to display in the table header */
  displayedColumns: string[] = ['Date', 'Location', 'Title'];

  /**
   * Constructor
   * @param eventService: service used to get the events
   */
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  /**
   * Method to know which event is selected
   * @param event: selected event
   */
  onSelectEvent(event: Event) {
    this.selectedEvent = event;
  }

  /**
   * Method which gets the events
   */
  getEvents() {
    // Call to the getEvents method of the service
    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events;
      this.selectedEvent = events[0];
    });
  }
}
