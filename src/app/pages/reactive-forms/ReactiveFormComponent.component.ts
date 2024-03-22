import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Forms ile ilgili işlemler yapmak için ReactiveFormsModule ekledik.

@Component({
  selector: 'app-ReactiveFormComponent',
  templateUrl: './ReactiveFormComponent.component.html',
  styleUrls: ['./ReactiveFormComponent.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class ReactiveFormComponentComponent implements OnInit {
  name: FormControl = new FormControl('ali', Validators.required);

  // profileForm = new FormGroup({
  //   firstName: new FormControl('', [Validators.minLength(5)]),
  //   lastName: new FormControl('', [Validators.maxLength(10)]),
  //   address: new FormGroup({
  //     city: new FormControl(),
  //     street: new FormControl(),
  //   }),
  // });

  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // nested form yapısı
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
      }),
    });

    this.name.statusChanges.subscribe((status) => {
      console.log('status', status);
    });
    // input değişimini observable olarak takip edebiliriz.
    this.name.valueChanges.subscribe((val) => {
      console.log('val', val);
    });

    this.profileForm.valueChanges.subscribe((formvalue) => {
      console.log('formValue', formvalue);
    });
  }

  SubmitForm() {
    if (this.profileForm.valid) {
      console.log('value', this.profileForm.value);
    }
  }
}
