import { Injectable, signal } from '@angular/core';
import { SwapperCurrency } from './swapper-currency/SwapperCurrency';

@Injectable({
  providedIn: 'root'
})
export class SwapperService {


currencyPrice=
{
  "EUR":1.14,
  "USD":1,
  "GBP":1.31
}

}
