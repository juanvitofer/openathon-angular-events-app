import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/* Models */
import { Event } from '../../models/event';
/* Services */
import { EventService } from '../../core/event.service';

@Component({
  selector: 'oevents-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  /* Create an event Input property */
  @Input()
  event: Event;

  /**
   * Constructor
   * @param route: activated route
   * @param eventService: service to get the event
   * @param router: router
   */
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.eventService.getEvent(id).subscribe((event: Event) => {
      console.log(event);
      this.event = event;
    });
  }

  /**
   * Method which deletes an event
   * @param event: Event to delete
   */
  deleteEvent(event: Event) {
    // Display de event to delete in console
    console.log(event);
    // Display a message when deleting the event
    this.eventService.deleteEvent(event.id).subscribe(() => {
      console.log('Event Removed');
    });
    // Navigate to the events page
    this.router.navigate(['/events']);
  }
}
