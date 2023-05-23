import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';

interface choice {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form1: FormGroup | any;
  form2: FormGroup | any;

  signOrReg: any | string = 'register';
  personal_id: string | any;
  email: string | any;
  
  hasHealth: boolean = false;
  selectValue: string | any;

  radioSelect: any;
  provinceSelectId: any;
  citySelectId: any;
  genderSelectId: any;
  healthSelectId: any;

  doctor_code: any;
  isDoctor: any;
  isDoctorLogin: any;
  expertise: any;
  hide = true;

  gender: choice[] = [
    { value: '1', viewValue: 'Female' },
    { value: '0', viewValue: 'Male' },
  ];
  select: string | any;

  isDoctorChange(data: MatRadioChange) {
    this.isDoctor = data.value;
  }
  isDoctorLoginChange(data: MatRadioChange) {
    this.isDoctorLogin = data.value;
  }
  radioButtonChange(data: MatRadioChange) {
    if (data.value == 'SelfPay') {
      this.hasHealth = false; 
    } else {
      this.hasHealth = true;
    }
    this.radioSelect = data.value;
    console.log(this.hasHealth);
  }

  genderChange(data: MatOptionSelectionChange) {
    this.genderSelectId = data;
  }
  cityChange(data: MatOptionSelectionChange) {
    this.citySelectId = data;
  }
  provinceChange(data: MatOptionSelectionChange) {
    this.provinceSelectId = data;
    const tmp = {
      province_id: this.provinceSelectId
    };
  }
  healthChange(data: MatOptionSelectionChange) {
    this.healthSelectId = data;
  }

  onLogin() {
    this.signOrReg = 'login';
  }
  onRegister() {
    this.signOrReg = 'register';
  }

  onSubmitLogin() {

  }

  onSubmitRegister() {
    
  }
  
}
