import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class RandomIntProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RandomIntProvider Provider');
  }

  getRandomInteger() {
    return this.http.get('http://localhost:8080/backend-service/rest/backendService/generateRandomIntegerText?max=1001')
      .do(this._logResponse)
      .map(this._mapDataToBenutzer)
      .catch(this._handleError);
  }


  private _logResponse(res) {
    console.log('Response: ', res);
  }

  private _mapDataToBenutzer(res) {
    console.log('Response: ', res);
    return res.generatedInteger;
  }

  private _handleError(error: HttpErrorResponse) {
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
  };

}
