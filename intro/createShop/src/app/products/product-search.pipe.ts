import { Pipe, PipeTransform } from '@angular/core';
import { product } from './Products';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: product[], filterText?: string): product[] {
    filterText = filterText !== null && filterText !== undefined ? filterText.toLowerCase() : undefined;
    
    return filterText 
      ? value.filter((p: product) => p.name.toLowerCase().includes(filterText as string))
      : value;
  }
}
