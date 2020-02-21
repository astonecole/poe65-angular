import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: UserModel = new UserModel();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  // Regex French Date : ^([0-9]{2}\/){2}[0-9]{4}$
  // Regex Englsih Date: ^([0-9]{4})(-[0-9]{2}){2}$

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9!$@#]{6,20}')]],
      birthday: ['', Validators.pattern('^([0-9]{4})(-[0-9]{2}){2}$')]
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}
