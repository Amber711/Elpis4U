import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centerFilter'
})
export class CenterFilterPipe implements PipeTransform {

  transform(items: any, filter: string[]): any {
    if (items && filter) {
      const newItems =  items.filter(item => {
          for (let i = 0; i < filter.length; i++) {
            if (!item[filter[i]]) {return false; }
          }
          return true;
      });
      console.log('...', newItems);
      return newItems;
    }

  }

}
