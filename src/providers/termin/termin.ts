import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
    console.error(error);
    return Observable.throw('Server error');
  }

}
