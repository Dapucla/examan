import { Injectable } from '@angular/core';
import { Students } from '../models/students.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students: Students[] = [{
    id: 1,
    name: "",
    surname: "",
    patronymic: "",
    phone: 0,
    email: "",
    birthday: "",
    group: 0,
    educationFaculty: 0
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
    educationFaculty: 1
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
    educationFaculty: 2
  }
  ];
  constructor(private http: HttpClient) {
  }
}
