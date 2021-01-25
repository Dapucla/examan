import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform(items: any, searchGroup: any): any {
    if (searchGroup === undefined) {
      return items
    } else {
      let filteredItemsGroup = items.filter(
        (e: any) => e.group.indexOf(searchGroup) !== -1
      );
      return filteredItemsGroup;
    }
  }

}
