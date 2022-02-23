import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { SidenavComponent } from './components/general/sidenav/sidenav.component';
import { FooterComponent } from './components/general/footer/footer.component';
import { CustomersComponent } from './components/main/customers/customers.component';
import { PageHeaderComponent } from './components/utils/page-header/page-header.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { NewCustomersComponent } from './components/main/new-customers/new-customers.component';
import { ContactsComponent } from './components/main/contacts/contacts.component';
import { CustomersDetailsComponent } from './components/main/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/main/customers-edit/customers-edit.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { PageNotFoundComponent } from './components/general/page-not-found/page-not-found.component';
import { LoginComponent } from './components/main/login/login.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { LogoutDirective } from './directives/logout.directive';
import { LoginWithGoogleDirective } from './directives/login-with-google.directive';
import { ContactsFilterPipe } from './pipes/contacts-filter.pipe';
import { SignUpComponent } from './components/main/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    CustomersComponent,
    PageHeaderComponent,
    NewCustomersComponent,
    ContactsComponent,
    CustomersDetailsComponent,
    CustomersEditComponent,
    SearchFilterPipe,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    LogoutDirective,
    LoginWithGoogleDirective,
    ContactsFilterPipe,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
