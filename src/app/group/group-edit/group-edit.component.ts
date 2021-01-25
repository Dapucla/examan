import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persons, TypeDepartmen } from 'src/app/shared/models/students.model';
import {PersonService} from '../../shared/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

  persons: Persons[] = [];
  id: number;
  person: Persons;
  myDepartmentType = TypeDepartmen;
  type: number = 0;


  personsForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private personService: PersonService, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      if (!isNullOrUndefined(params.id)) {
        this.id = params.id;
      } else {
        this.id = null;
      }
    })
  }

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
    if (!isNullOrUndefined(this.id)) {
      try {
        let person = this.personService.getOneById(this.id);
        this.person = await person;
      } catch (error) {
        console.log(error); 
      }
      this.personsForm.patchValue({
        name: this.person.name,
        surname: this.person.surname,
        patronymic: this.person.patronymic,
        phone: this.person.phone,
        email: this.person.email,
        birthday: this.person.birthday,
        department: this.person.department,
        group: this.person.group,

      })
    }
  }

  async onDelete() {
    try {
      await this.personService.deleteOneByid(this.id);
    } catch (error) {
      console.log(error);
    }
    this.router.navigate(['/group']);
  }

  async onSave() {
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.personService.putOne(this.id, this.personsForm.value);
      } catch (error) {
        console.log(error);
      }
      this.router.navigate(['/group']);
    } else {
      try {
        let res = await this.personService.postOne(this.personsForm.value);
        // this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (error) {
        console.log(error);
      }
    }
  }

}
