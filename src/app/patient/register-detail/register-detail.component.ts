import { Component, Input, OnInit } from '@angular/core';
import { Register } from 'src/app/shared/types/register';

@Component({
  selector: 'app-register-detail',
  templateUrl: './register-detail.component.html',
  styleUrls: ['./register-detail.component.css'],
})
export class RegisterDetailComponent implements OnInit {
  @Input() registerDataList: Register[];
  constructor() {
   
  }

  ngOnInit(): void {
    console.log(this.registerDataList);
  }
}
