import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class TerminProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello TerminProvider Provider');
  }

  getTermine() {
    return this.httpClient.get('http://localhost:8080/dr-solutions/rest/backendService/getAllTermine')
      .do(this._logResponse)
      .map(this._mapDataToTermin)
      .catch(this._throwError);
  }

  private _logResponse(res) {
    console.log('Response: ', res);
  }

  private _mapDataToTermin(res) {
    return res;
  }

  private _throwError(error) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }

}
