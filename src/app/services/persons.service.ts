import { Injectable } from '@angular/core';
import { Persons } from '../models/students.model';
import { HttpClient } from '@angular/common/http';
import { BaseHttp } from './basehttp';


@Injectable({
  providedIn: 'root'
})
export class PersonsService extends BaseHttp {
  persons: Persons[] = [{
    id: 1,
    name: "",
    surname: "",
    patronymic: "",
    phone: 0,
    email: "",
    birthday: "",
    group: 0,
    department: 0
  },
  {
    id: 2,
    name: "",
    surname: "",
    patronymic: "",
    phone: 0,
    email: "",
    birthday: "",
    group: 0,
    department: 1
  },
  {
    id: 3,
    name: "",
    surname: "",
    patronymic: "",
    phone: 0,
    email: "",
    birthday: "",
    group: 0,
    department: 2
  }
  ];
  constructor(public http: HttpClient) {
    super(http, 'persons')
  }
}
