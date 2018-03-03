import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RandomIntProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RandomIntProvider Provider');
  }

  getRandomInteger() {
    return this.http.get('https://randomuser.me/api/?results=5')
      .do(this._logResponse)
      .map(this._mapDataToBenutzer)
      .catch(this._throwError);
  }


  private _logResponse(res) {
    console.log('Response: ', res);
  }

  private _mapDataToBenutzer(res): number {
    return res.results[0].location.postcode;
  }

  private _throwError(error) {
    console.error(error);
    return Observable.throw('Server error');
  }

}
