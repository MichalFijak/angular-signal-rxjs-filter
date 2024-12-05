import { Observable, of } from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop"
export class CalculatorService
{
    private readonly exchangeRates: ExchangeRates = {
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

      private exchangeRatesObservable:Observable<ExchangeRates> = of(this.exchangeRates);
      
      
      // to check initial value, implement interval 

      private exchangeRateToSignal = toSignal(this.exchangeRatesObservable,
                                    {initialValue:
                                        {USD: 
                                            {
                                            PLN: 4.04,
                                            EUR: 0.95
                                            }
                                        }
                                    });
      getExchangeRate(){
        return this.exchangeRateToSignal;
      }
}

interface ExchangeRates {
    [key: string]: {
      [key: string]: number;
    };
  }
  
  