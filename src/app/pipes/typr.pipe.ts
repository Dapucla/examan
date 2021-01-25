import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typr'
})
export class TyprPipe implements PipeTransform {

  transform(persons: { type: number }[], type: number): any[] {
    if (type === 0) {
      return persons
    }
    else {
      return persons.filter((person) => person.type == type);
    }
  }
}
