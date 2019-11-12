import { Injectable } from '@angular/core';
/* Import RxJS Library */
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
/* Import ngrx Effects */
import { Actions, Effect, ofType } from '@ngrx/effects';
/* Services */
import { EventService } from '../../core/event.service';


@Injectable()
export class LayoutEffects {

  /**
   * Constructor
   * @param actions$: Actions
   * @param eventService: Event Service
   */
  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) {}

  /**
   * Filtered Events
   */
  @Effect()
  getFilteredEvents$ = this.actions$.pipe(
    ofType('layout/GET_FILTERED_EVENTS'),
    switchMap((filter: any) => this.eventService.getFilteredEvents(filter.payload)
      .pipe(
        map(res => ({ type: 'layout/GET_FILTERED_EVENTS_SUCCESS', payload: res })),
        catchError(error => of({ type: 'layout/GET_FILTERED_EVENTS_ERROR', payload: error }))
      )
    )
  );
}
