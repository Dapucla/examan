import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/shared/services/person.service';
import {Persons, TypeDepartmen} from '../../shared/models/students.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  persons: Persons[] = []
  searchStr: string = '';
  searchGroup: any;
  id: number;
  type: number = 1;
  myDepType = TypeDepartmen;

  constructor(private personService: PersonService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    try {
      this.persons = await this.personService.getAll();
      this.persons.sort((a, b) => {
        if (a.name < b.name) {return -1;}
        else if (a.name > b.name ) {return 1;}
        else return 0;
      });
    } catch (error) {
      console.log(error);
      
    }
  }

  onAdd() {
    this.router.navigate([this.router.url, 'edit'])
  }

  async OnDelete(id: any) {
    try {
      await this.personService.deleteOneByid(this.id);
    } catch (error) {
      console.log(error);
    }
    this.router.navigate(['/shop']);
  }

  OnEdit(id: any) {
    this.router.navigate([this.router.url, 'edit', id])
  }
}
