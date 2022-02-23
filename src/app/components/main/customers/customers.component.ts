import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customer$: Observable<Customer[]>;
  phoneTerm: string = '';
  firstNameTerm: string = '';
  lastNameTerm: string = '';

  constructor(private customerService: CustomersService) {
    this.customer$ = this.customerService.getAll();
  }

  remove(id?: string) {
    if (!id) {
      return;
    }
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.remove(id);
    }
  }

  ngOnInit(): void {}
}
