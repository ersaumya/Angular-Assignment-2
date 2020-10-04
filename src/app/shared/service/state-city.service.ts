import { Injectable } from '@angular/core';
import { City } from '../types/city';
import { State } from '../types/state';

@Injectable({
  providedIn: 'root',
})
export class StateCityService {
  state: State[] = [
    { id: 1, name: 'Maharastra' },
    { id: 2, name: 'Odisha' },
  ];
  city: City[] = [
    { id: 1, stateId: 2, name: 'Cuttack' },
    { id: 1, stateId: 2, name: 'Bhubaneswar' },
    { id: 1, stateId: 2, name: 'Baleswar' },
    { id: 1, stateId: 2, name: 'Beherampur' },
    { id: 1, stateId: 1, name: 'Mumbai' },
    { id: 1, stateId: 1, name: 'Pune' },
    { id: 1, stateId: 1, name: 'Nagpur' },
    { id: 1, stateId: 1, name: 'Nashik' },
  ];
  constructor() {}

  getState() {
    return this.state;
  }
  getCity() {
    return this.city;
  }
}
