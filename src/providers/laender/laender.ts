import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Laender } from '../../interfaces/laender/laender';

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

  getLaenderImages() {
    return this.httpClient.get('https://restcountries.eu/rest/v2/regionalbloc/eu')
    .do(this._logResponse)
    .map(this._mapDataToLaenderImages)
    .catch(this._throwError);
  }

  private _logResponse(res) {
    console.log('Response: ', res);
  }

  private _mapDataToLaender(res) {
    return res;
  }

  private _mapDataToLaenderImages(res) {
    return res.map((res: Laender) => res.flag);
  }

  private _throwError(error) {
    console.error(error);
    return Observable.throw('Server error');
  }
}
