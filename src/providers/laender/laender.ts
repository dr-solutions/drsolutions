import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LaenderProvider {

  constructor(private httpClient: HttpClient) {
    console.log('Hello LaenderProvider Provider');
  }

  getLaender() {
    return this.httpClient.get('https://restcountries.eu/rest/v2/all')
      .do(this._logResponse)
      .map(this._mapDataToLaender)
      .catch(this._throwError);
  }


  private _logResponse(res) {
    console.log('Response: ', res);
  }

  private _mapDataToLaender(res) {
    return res;
  }

  private _throwError(error) {
    console.error(error);
    return Observable.throw('Server error');
  }
}
