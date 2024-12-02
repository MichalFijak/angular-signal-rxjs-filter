import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CountryFilterComponent } from './country-filter/country-filter.component';

@Component({
  selector: 'app-root',
  imports: [CountryFilterComponent],
  template: `
    <app-country-filter></app-country-filter>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
