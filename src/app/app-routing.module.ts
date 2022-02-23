import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/general/page-not-found/page-not-found.component';
import { ContactsComponent } from './components/main/contacts/contacts.component';
import { CustomersDetailsComponent } from './components/main/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/main/customers-edit/customers-edit.component';
import { CustomersComponent } from './components/main/customers/customers.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { LoginComponent } from './components/main/login/login.component';
import { NewCustomersComponent } from './components/main/new-customers/new-customers.component';
import { SignUpComponent } from './components/main/sign-up/sign-up.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full',
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },

      {
        path: 'customers/new',
        component: NewCustomersComponent,
      },

      {
        path: 'customers/:id',
        component: CustomersDetailsComponent,
      },
      {
        path: 'customers/:id/edit',
        component: CustomersEditComponent,
      },

      {
        path: 'contacts',
        component: ContactsComponent,
      },
    ],
  },

  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
