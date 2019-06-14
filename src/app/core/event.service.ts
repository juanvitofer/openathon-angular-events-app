import { Injectable } from '@angular/core';
/* Import HttpClient for making the request over the HTTP protocol */
/* Import HttpErrorResponse to retunr an http error message */
/* Import HttpHeaders to add simple headers */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
/* Import RxJS library */
import { Observable, throwError  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
/* Import enviroment file */
import { environment } from '../../environments/environment';
/* Models */
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  /**
   * Constructor
   * @param http: http client service
   */
  constructor(private http: HttpClient) { }

  /**
   * Method to get the events
   */
  getEvents(): Observable<any> {
    // Create the header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Set the enviroment and header
    return this.http.get(environment.apiURL + 'events', { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  /**
   * Method to get a specific event
   * @param id: Event identifier
   */
  getEvent(id: string): Observable<any> {
    // Create the header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Set the enviroment and header
    return this.http.get(environment.apiURL + 'events/' + id, { headers }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  /**
   * Method which adds an event
   * @param event: Event to add
   */
  addEvent(event: Event): Observable<any> {
    // Create the header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Set the enviroment and header
    return this.http
      .post(environment.apiURL + 'events/', event, { headers })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  /**
   * Method which updates an event
   * @param event: Event to update
   */
  updateEvent(event: Event): Observable<any> {
    // Create the header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Set the enviroment and header
    return this.http
      .put(environment.apiURL + 'events/' + event.id, event, { headers })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  /**
   * Method which deletes an event
   * @param id: Event identifier
   */
  deleteEvent(id: string): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http
      .delete(environment.apiURL + "events/" + id, { headers })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  /**
   * Method which handles an error
   * @param error: error to handle
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues about what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
