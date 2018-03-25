import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpConstants } from '../httpConstants/httpConstants';
import { PersonSelect } from '../../interfaces/person/personSelect';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PersonProvider {
  readonly API = HttpConstants.RENES_IP_API;

  constructor(public http: HttpClient) {
  }

  getPersonen(): Observable<PersonSelect[]> {
    let personSelect: PersonSelect[] = [];

    const person1: PersonSelect = { value: 2, label: 'Jakob Kraushofer', selected: false};
    const person2: PersonSelect = { value: 1, label: 'Rene Dolar', selected: false};
    const person3: PersonSelect = { value: 3, label: 'Lisa Perina', selected: false};
    personSelect.push(person1);
    personSelect.push(person2);
    personSelect.push(person3);

    return Observable.of(personSelect);
    // return this.http.get(this.API + 'getAllPersonen')
    //   .map(this._mapDataToPersonenSelect);
  }

  // private _mapDataToPersonenSelect(res) {
  //   return res;
  // }
}
