import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
/* Models */
import { Event } from '../../models/event';
import { User } from '../../models/user';
/* Services */
import { EventService } from '../../core/event.service';


@Component({
  selector: 'oevents-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.scss']
})
export class AddEditEventComponent implements OnInit {
  /* Property which contains the data form */
  addEditForm: FormGroup;
  /* Property which contains the event */
  event: Event;

  /**
   * 
   * @param fb: form builder
   * @param eventService: service to get the event
   * @param router: router
   * @param route: activated route
   */
  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Event id
    const id = this.route.snapshot.params.id;
    // Verify the event id in the route
    if (id) {
      this.eventService.getEvent(id).subscribe((event: Event) => {
        console.log(event);
        this.event = event;
        this.createForm();
      });
    } else {
      this.createForm();
    }
  }

  /**
   * Method which creates the form
   */
  createForm() {
    // Check the event
    if (this.event) { // The event has id
      this.addEditForm = this.fb.group({
        title: this.event.title,
        location: this.event.location,
        date: this.event.date,
        description: this.event.description,
        addedBy: this.event.addedBy,
        id: this.event.id
      });
    } else { // The event has not id
      this.addEditForm = this.fb.group({
        title: '',
        location: '',
        date: '',
        description: '',
        addedBy: '',
        id: ''
      });
    }
  }

  /**
   * Method which submit the form
   */
  onSubmit() {
    // User Logged
    const user: User = JSON.parse(localStorage.getItem('user'));
    // Event to submit
    this.event = this.addEditForm.value;
    this.event.addedBy = user.email;
    // Check the event id
    if (this.event.id) { // The event has id
      this.eventService.updateEvent(this.event).subscribe((event: Event) => {
        console.log(event);
        this.addEditForm.reset();
        this.router.navigate(['/events']);
      });
    } else { // The event has not id
      this.eventService.addEvent(this.event).subscribe((event: Event) => {
        console.log(event);
        this.addEditForm.reset();
        this.router.navigate(['/events']);
      });
    }
  }
}
