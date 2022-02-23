import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  docData,
  Firestore,
  getDoc,
  getDocs,
  updateDoc,
} from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable, shareReplay } from 'rxjs';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef: CollectionReference<Customer>;
  customer$: Observable<Customer[]>;
  constructor(private afs: Firestore) {
    this.customersRef = collection(
      this.afs,
      'customers'
    ) as CollectionReference<Customer>;

    this.customer$ = collectionData(this.customersRef, { idField: 'id' }).pipe(
      shareReplay(1)
    );
  }

  addCustomer(customer: Omit<Customer, 'id'>) {
    return addDoc(this.customersRef, customer);
  }

  getCustomerDetails(id: string) {
    const docReference = doc(this.customersRef, id);
    return docData(docReference, { idField: 'id' });
  }

  getAll() {
    return this.customer$;
  }

  remove(id: string) {
    const docReference = doc(this.customersRef, id);
    return deleteDoc(docReference);
  }

  updateCustomer({ id, ...customer }: Partial<Customer>) {
    if (!id) {
      return;
    }
    const docReference = doc(this.customersRef, id);
    return updateDoc(docReference, customer);
  }
}
