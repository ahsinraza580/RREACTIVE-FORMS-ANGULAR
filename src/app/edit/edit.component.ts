import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  EMPForm!: FormGroup
  constructor() { }

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
