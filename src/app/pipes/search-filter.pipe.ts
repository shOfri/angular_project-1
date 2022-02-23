import { Pipe, PipeTransform } from '@angular/core';

import { Customer } from '../interfaces/customer';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    customers: Customer[] | null,
    propertyName: keyof Customer,
    searchText: string
  ): Customer[] | null {
    if (!customers) {
      return null;
    }

    return customers.filter((cutomer) =>
      cutomer[propertyName]?.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
