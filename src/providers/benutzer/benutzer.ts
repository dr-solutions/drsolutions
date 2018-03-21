import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Benutzer } from '../../interfaces/benutzer/benutzer';

@Injectable()
export class BenutzerProvider {

  constructor(private httpClient: HttpClient) {
  }

  getBenutzer() {
    return this.httpClient.get('https://randomuser.me/api/?results=5')
      .do(this._logResponse)          // gleich wie .do((res) => this._logResponse(res))
      .map(this._mapDataToBenutzer)   // gleich wie .map((res) => this._mapDataToBenutzer(res))
  }

  private _logResponse(res) {
    console.log('Response: ', res);
  }

  private _mapDataToBenutzer(res): Benutzer[] {
    return res.results;
  }

}
