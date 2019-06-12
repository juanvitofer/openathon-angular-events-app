import { Injectable } from '@angular/core';
/* Import HttpClient for making the request over the HTTP protocol */
/* Import HttpHeaders to add simple headers */
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Import RxJS library */
import { Observable } from 'rxjs';

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
    // Set the .json file route and the header
    return this.http.get('assets/events.json', { headers });
  }
}
