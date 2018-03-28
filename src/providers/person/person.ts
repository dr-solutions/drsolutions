import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpConstants } from '../httpConstants/httpConstants';
import { PersonSelect } from '../../interfaces/person/personSelect';
import { Person } from '../../interfaces/person/person';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PersonProvider {
  readonly API = HttpConstants.RENES_IP_API;
  readonly SERVICE_NAME = 'personService/';

  constructor(public http: HttpClient) {
  }

  getPersonenSelect(): Observable<PersonSelect[]> {
    return this.http.get(this.API + this.SERVICE_NAME + 'getAllPersonenSelect')
      .map(this._mapDataToPersonenSelect);
  }

  getPersonen(): Observable<Person[]> {
    return this.http.get(this.API + this.SERVICE_NAME + 'getAllPersonen')
      .map(this._mapDataToPersonenSelect);
  }

  personErstellen(person: Person) {
    return this.http.post<Person>(this.API + this.SERVICE_NAME + 'saveOrUpdatePerson', person)
      .map(this._mapDataToPersonen)
  }

  personAendern(person: Person) {
    return this.http.post<Person>(this.API + this.SERVICE_NAME + 'saveOrUpdatePerson', person)
      .map(this._mapDataToPersonen)
  }

  personLoeschen(id: number) {
    return this.http.post(this.API + this.SERVICE_NAME + 'deletePerson', id)
    .map(this._mapDataToPersonen)
  }

  private _mapDataToPersonenSelect(res) {
    return res;
  }

  private _mapDataToPersonen(res) {
    return res;
  }
}
