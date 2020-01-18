import { Injectable } from '@angular/core';
import {LivingCenter} from '../models/living-center.model';
import {LIVING_CENTERS} from '../mock-data';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getLivingCenterList(): Promise<LivingCenter[]> {
    //return LIVING_CENTERS;
    return this.httpClient.get('https://elpis4u.herokuapp.com/api/living_centers')
      .toPromise()
      .then(res => {
        console.log('res:', res);
        return res;
      })
      .catch(err => console.error(err));
  }
}
