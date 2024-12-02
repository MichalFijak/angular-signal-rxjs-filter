import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryService } from './country-service/countryService';

@Component({
  selector: 'app-country-filter',
  imports: [CommonModule, FormsModule],
  templateUrl: './country-filter.component.html',
  styleUrl: './country-filter.component.css'
})
export class CountryFilterComponent implements OnInit {
  baseCountriesForObservables :string[]=[""];
  filteredCountriesForObservables :string[]=[""];

  filterQuery ="";
  addCountryQuery='';
  constructor(private countryService:CountryService)
  {
  }
  ngOnInit(): void {
    this.countryService.countriesObservable.subscribe((countries)=>
    this.baseCountriesForObservables=countries)
    this.filteredCountriesForObservables=this.baseCountriesForObservables;
    }

  addCountry()
  {
    this.countryService.addCountry(this.addCountryQuery);
  }

  filter()
  {
    this.filteredCountriesForObservables=this.baseCountriesForObservables
                                          .filter(c=>c.toLowerCase().includes(
                                                  this.filterQuery.toLowerCase()));
  }


}
