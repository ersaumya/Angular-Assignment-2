import { City } from './city';
import { State } from './state';
export interface Register {
    name:string,
    surName:string,
    gender:string,
    dob:Date,
    state:State[],
    city:City[]
}
