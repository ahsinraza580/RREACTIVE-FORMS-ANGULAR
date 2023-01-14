import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  EMPForm!: FormGroup
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.EMPForm = new FormGroup ({
      name : new FormControl('',[Validators.required]),
      email: new FormControl ('',[Validators.required, Validators.email]),
      age:new FormControl('',[Validators.required]),
      salary:new FormControl('',[Validators.required]),
    })
  }

  onLogin() {
    if (!this.EMPForm.valid) {
      return;
    }
    console.log(this.EMPForm.value);
  }

}
