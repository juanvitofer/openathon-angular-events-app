import { Injectable } from '@angular/core';
/* Import HttpClient for making the request over the HTTP protocol */
/* Import HttpErrorResponse to retunr an http error message */
/* Import HttpHeaders to add simple headers */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
/* Import RxJS library */
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
/* Import enviroment file */
import { environment } from '../../environments/environment';
/* Models */
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /* Property which indicates if user is authenticated */
  isAuthenticated: boolean;

  /**
   * Constructor
   * @param http: http client service
   */
  constructor(private http: HttpClient) { }

  /**
   * Method which signs up an user
   * @param user: User to sign up
   */
  signup(user: User): Observable<any> {
    // Create the header
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // Set the enviroment and header
    return this.http
    .post(environment.apiURL + 'users/', user, { headers })
    .pipe(
      retry(3),
      map(r => {
        localStorage.setItem('user', JSON.stringify(r));
        this.setUser();
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Method which performs the login user
   * @param user: User to login
   */
  login(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(environment.apiURL + 'users?email=' + user.email, { headers }).pipe(
      retry(3),
      map(us => {
        if (us[0].email) {
          localStorage.setItem('user', JSON.stringify(us[0]));
          this.setUser();
          return us[0].password === user.password ? us[0] : 'Password not valid.';
        }
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Method which performs the logout user
   */
  logout() {
    localStorage.setItem('user', '');
    return false;
  }

  /**
   * Method which check an user
   */
  checkUser(): boolean {
    this.setUser();
    return this.isAuthenticated;
  }

  /**
   * Method which sets an user
   */
  private setUser() {
    this.isAuthenticated = localStorage.getItem('user') ? true : false;
  }

  /**
   * Method which handles an error
   * @param error: Error to handle
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
