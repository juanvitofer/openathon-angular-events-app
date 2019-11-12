import { Component, OnInit, OnDestroy } from '@angular/core';
/* Import ngrx Store */
import { select, Store } from '@ngrx/store';
/* Import Layout Actions */
import * as layout from '../../store/layout/layout.actions';
/* Import RxJs Library */
import { SubscriptionLike } from 'rxjs';
/* Models */
import { Event } from '../../models/event';
import { User } from '../../models/user';
/* Services */
import { EventService } from '../../core/event.service';

@Component({
  selector: 'oevents-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {
  /* Property to save Events */
  events: Event[];
  /* Property which contains the selected event */
  selectedEvent: Event;
  /* Property which contains the table columns to display in the table header */
  displayedColumns: string[] = ['Date', 'Location', 'Title'];
  /* Property which contains the slide events */
  slideMyEvents: boolean;
  /* Property which contains the subscription layout */
  subscriptionLayout: SubscriptionLike;
  /* Property which contains the subscription login */
  subscriptionLogin: SubscriptionLike;
  /* Property which indcated if the user is authenticated */
  isAuthenticated: boolean;

  /**
   * Constructor
   * @param eventService: service used to get the events
   * @param store: Store
   */
  constructor(
    private eventService: EventService,
    private store: Store<any>) { }

  ngOnInit() {
    this.getEvents();

    this.subscriptionLayout = this.store.pipe(select('layout')).subscribe(state => {
      if (state && state.filteredEvents) {
        this.events = state.filteredEvents;
        this.selectedEvent = this.events[0];
      }
    });

    this.subscriptionLogin = this.store.pipe(select('login')).subscribe(state => { // <-- NEW
      if (state) {
        this.isAuthenticated = state.logged;
      }
    });
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

  /**
   * Methods which slide toggle in the view
   */
  myEventsChange() {
    const user: User = JSON.parse(localStorage.getItem('user'));

    if (this.slideMyEvents && user) {
      const userMail = user.email;
      const filter = 'addedBy=' + userMail;
      this.store.dispatch(new layout.GetFilteredEvents(filter));
    } else {
      this.getEvents();
    }
  }

  ngOnDestroy() {
    this.subscriptionLayout.unsubscribe();
    this.subscriptionLogin.unsubscribe();
  }
}
