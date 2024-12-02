import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

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
  
    getCountry()
    {
      return [... this.baseCountries];
    }

    countriesSubject = new BehaviorSubject<string[]>(this.baseCountries);
    countriesObservable= this.countriesSubject.asObservable();
}