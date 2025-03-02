import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryService } from './country-service/countryService';
import { Subscription, filter, map, tap } from 'rxjs';
import { CountryFormatterPipe } from '../pipe/country-formatter.pipe';
import { SecondCountryFilterPipe } from '../pipe/second-country-filter.pipe';

@Component({
  selector: 'app-country-filter',
  imports: [CommonModule, FormsModule,CountryFormatterPipe,SecondCountryFilterPipe],
  templateUrl: './country-filter.component.html',
  styleUrl: './country-filter.component.css'
})
export class CountryFilterComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  filterQuery ="";
  filterQuery2="";
  addCountryQuery='';
  baseCountriesForObservables :string[]=[""];
  filteredCountriesForObservables :string[]=[""];

  baseCountriesForSignal=signal<string[]>([""]);
  signalFilterQuery =signal<string>('');
  signalAddCountryQuery=signal<string>('');

  constructor(private countryService:CountryService)
  {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.countryService.countriesObservable.subscribe((countries)=>{
    this.baseCountriesForObservables=countries
    this.filteredCountriesForObservables=countries;
    }))

    this.baseCountriesForSignal.set(this.countryService.getSignalCountries());
    
  }

  addCountry()
  {
    this.countryService.addCountry(this.addCountryQuery);
  }

  filterCountries()
  {
    this.filteredCountriesForObservables=this.baseCountriesForObservables
                                          .filter(c=>c.toLowerCase().includes(
                                                  this.filterQuery.toLowerCase()));
  }
  filterCountries2()
  {
    this.subscriptions.add(this.countryService.countriesObservable.pipe(
                                        map(countries=>countries.filter(country=>
                                          country.toLowerCase().includes(this.filterQuery2.toLowerCase()))))
                                          .subscribe(filteredCountries=>this.filteredCountriesForObservables=filteredCountries)
                          );
  }


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
