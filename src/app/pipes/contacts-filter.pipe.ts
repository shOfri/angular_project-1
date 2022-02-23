import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Pipe({
  name: 'contactsFilter',
})
export class ContactsFilterPipe implements PipeTransform {
  transform(contacts: any[], field: string, searchText: string): any[] {
    if (!contacts) {
      return [];
    }
    if (!field || !searchText) {
      return contacts;
    }

    return contacts.filter((contact) =>
      contact[field].toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
