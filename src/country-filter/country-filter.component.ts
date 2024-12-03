import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
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

  baseCountriesForSignal=signal<string[]>([""]);

  filterQuery ="";
  addCountryQuery='';
  signalFilterQuery =signal<string>('');
  signalAddCountryQuery=signal<string>('');
  constructor(private countryService:CountryService)
  {
  }
  ngOnInit(): void {
    this.countryService.countriesObservable.subscribe((countries)=>{
    this.baseCountriesForObservables=countries
    this.filteredCountriesForObservables=countries;
    })

    this.baseCountriesForSignal.set(this.countryService.getSignalCountries());
    
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
  // try do filter with .map().pipe() etc

  signalAddCountry()
  {
    this.countryService.signalAddCountry(this.signalAddCountryQuery());
  }

  signalFilter()
  {

    let items = computed(()=>this.countryService.getSignalCountries()
                          .filter(c=>c.toLowerCase().includes(this.signalFilterQuery().toLowerCase())))
    this.baseCountriesForSignal.set(items());
  }

}
