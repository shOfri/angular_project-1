import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-new-customers',
  templateUrl: './new-customers.component.html',
  styleUrls: ['./new-customers.component.scss'],
})
export class NewCustomersComponent implements OnInit {
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
      await this.customerService.addCustomer(this.form);
      this.router.navigate(['..'], {
        relativeTo: this.activatedRouter,
      });
    }
  }

  reset(customersForm: NgForm) {
    customersForm.resetForm({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  ngOnInit(): void {}
}
