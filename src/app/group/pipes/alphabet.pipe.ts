import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabet'
})
export class AlphabetPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
