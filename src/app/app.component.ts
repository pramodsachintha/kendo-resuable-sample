import { Component } from '@angular/core';
import { SampleDataService } from './sample-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private customerService: SampleDataService) {
  }

  loadData = (params: any) => {
    return this.customerService.getSampleCustomerData(params);
  }
}
