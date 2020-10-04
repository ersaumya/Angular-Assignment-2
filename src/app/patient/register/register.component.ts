import { StateCityService } from './../../shared/service/state-city.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { State } from 'src/app/shared/types/state';
import { City } from 'src/app/shared/types/city';
import { Register } from 'src/app/shared/types/register';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  submitted: boolean;
  states: State[];
  cities: City[];
  registerList: Register[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private stateCityService: StateCityService
  ) {}

  ngOnInit(): void {
    this.registerForm();
    this.states = this.stateCityService.getState();
  }

  registerForm() {
    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      surName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      gender: [''],
      dob: [''],
      state: [''],
      city: [''],
    });
  }
  get name() {
    return this.formRegister.get('name');
  }
  get surName() {
    return this.formRegister.get('surName');
  }

  onSubmit() {
    this.submitted = true;
    if (this.formRegister.invalid) {
      return;
    }
    this.registerList.push(this.formRegister.value);
    console.log(this.registerList);
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }

 

  onChangeState(stateId: any) {
    this.cities = this.stateCityService
      .getCity()
      .filter((item) => item.stateId == stateId);
  }
}


