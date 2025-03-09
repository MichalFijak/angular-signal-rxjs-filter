import { Observable, of } from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop"
import { Injectable } from "@angular/core";
@Injectable({providedIn:'root'})
export class CalculatorService
{
    private readonly exchangeRates= {
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

      getExchangeRate(){
      }
}

  
  