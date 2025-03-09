import { Injectable } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Observable, of } from "rxjs";
@Injectable({providedIn:'root'})
export class CalculatorService
{
    private readonly exchangeRatesMock= {
        USD: {
          PLN: 4.04,
          EUR: 0.95,
        },
        EUR: {
          PLN: 4.28,
          USD: 1.05, 
        },
        PLN: {
          USD: 0.25, 
          EUR: 0.23,
        }
      };

     private exchangeRates$ : Observable<ExchangeRates> = of(this.exchangeRatesMock);
     private exchangeRates = toSignal(this.exchangeRates$,{initialValue:{USD:{PLN:1,EUR:1}}});


     getExchangeRates()
      {
        return this.exchangeRates;
      }

      updateRates()
      {
        
      }
}

export interface ExchangeRates
{
  [key:string]:
  {
    [key:string]:number;
  }
}

  
  