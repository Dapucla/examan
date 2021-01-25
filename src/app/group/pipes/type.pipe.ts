import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(persons: {type: number}[], type: number): any[] {
    if (type == 0) {
      return persons;
    } else {
      return persons.filter(person=>person.type==type);
    }
  }

}
