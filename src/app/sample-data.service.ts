import { Injectable } from '@angular/core';
import { sampleCustomers, customers } from './customer';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  constructor() { }

  public getSampleCustomerData(params: any): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(customers);
      }, 1000);
    });
  }
}
