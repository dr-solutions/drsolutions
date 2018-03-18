import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RandomIntProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RandomIntProvider Provider');
  }

  getRandomInteger() {
    return this.http.get('http://localhost:8080/backend-service/rest/backendService/generateRandomIntegerText?max=1001')
      .do(this._logResponse)
      .map(this._mapDataToBenutzer)
  }


  private _logResponse(res) {
    console.log('Response: ', res);
  }

  private _mapDataToBenutzer(res) {
    console.log('Response: ', res);
    return res.generatedInteger;
  }

}
