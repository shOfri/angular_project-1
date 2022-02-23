import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  nameTerm: string = '';

  contacts: Contact[] = [];

  constructor(private contactsService: ContactsService) {
    this.contacts = this.contactsService.getAll();
  }

  ngOnInit(): void {}
}
