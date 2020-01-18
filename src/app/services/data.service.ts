import { Injectable } from '@angular/core';
import {LivingCenter} from '../models/living-center.model';
import {LIVING_CENTERS} from '../mock-data';

@Injectable()
export class DataService {

  constructor() { }

  getLivingCenterList(): LivingCenter[] {
    return LIVING_CENTERS;
  }
}
