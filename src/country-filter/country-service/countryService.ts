import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:"root"})
export class CountryService
{
    private readonly baseCountries :string[] =
    [
      "Deutschland", "Slovenia", "Slovakia","Poland","France","Espania"
    ]
  
    addCountry(country:string)
    {
      this.baseCountries.push(country);
      this.countriesSubject.next([...this.baseCountries]);
    }
    countriesSubject = new BehaviorSubject<string[]>(this.baseCountries);
    countriesObservable= this.countriesSubject.asObservable();
    

    private readonly signalBaseCountries = signal<string[]>(this.baseCountries);

    getSignalCountries()
    {
      return this.signalBaseCountries();
    }

    signalAddCountry(country:string)
    {
      this.baseCountries.push(country)
      this.signalBaseCountries.set([...this.baseCountries]);

    }


    

}