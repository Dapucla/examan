import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonsService } from 'src/app/services/persons.service';
import { TypeDepartmen } from 'src/app/models/students.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Persons } from 'src/app/models/students.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() addPerson = new EventEmitter<any>();

  myDepartmentType = TypeDepartmen;
  type: number = 0;
  personsForm!: FormGroup;
  persons: Persons[] = [];
  person: Persons;
  constructor(private personsService: PersonsService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.personsForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      birthday: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required]),
    })
    this.getData()
  }

  async getData() {
    try {
      this.persons = await this.personsService.getAll()
    } catch (error) {
      console.log(error)
    }

    this.personsForm.patchValue({
      name: this.person.name,
      surname: this.person.surname,
      email: this.person.email,
      patronymic: this.person.patronymic,
      phone: this.person.phone,
      birthday: this.person.birthday,
      group: this.person.group,
      department: this.person.department,
    })

  }

  async onAddPerson() {
    try {
      await this.personsService.postOne(this.personsForm.value)
      this.getData();
    } catch (error) {
      console.log(error)

    }
    // this.router.navigate(['/students']);

  }

}
