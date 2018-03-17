import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Termin } from '../../interfaces/termin/termin';

@Injectable()
export class TerminProvider {  

  constructor(public httpClient: HttpClient) {
    console.log('Hello TerminProvider Provider');
  }

  getTermine() {
    return this.httpClient.get('http://localhost:8080/dr-solutions/rest/backendService/getAllTermine')
      .do(this._logResponse)
      .map(this._mapDataToTermine)
  }

  terminErstellen(termin: Termin) {
    return this.httpClient.post<Termin>('http://localhost:8080/dr-solutions/rest/backendService/saveOrUpdateTermin', 
      termin)
      .do(this._logResponse)
      .map(this._mapDataToTermine)
  }

  terminAendern(termin: Termin) {
    return this.httpClient.post<Termin>('http://localhost:8080/dr-solutions/rest/backendService/saveOrUpdateTermin', 
      termin)
      .do(this._logResponse)
      .map(this._mapDataToTermine)
  }

  terminLoeschen(id: number) {
    return this.httpClient.post('http://localhost:8080/dr-solutions/rest/backendService/deleteTermin', id)
    .map(this._mapDataToTermine)
  }

  private _logResponse(res) {
    console.log('Response: ', res);
  }

  private _mapDataToTermine(res) {
    return res;
  }

  /*private _throwError(error) {
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
    if (error.url === null) {
      return new ErrorObservable(
        'Service nicht verfügbar');
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }*/

}
