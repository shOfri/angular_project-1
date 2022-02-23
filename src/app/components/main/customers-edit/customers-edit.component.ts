import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { CustomersComponent } from '../customers/customers.component';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit {
  form = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };
  error = '';

  constructor(
    private customerService: CustomersService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customerService.updateCustomer(this.form);
      this.router.navigate(['/dashboard'], {
        relativeTo: this.activatedRouter,
      });
    }
  }

  ngOnInit(): void {}
}
