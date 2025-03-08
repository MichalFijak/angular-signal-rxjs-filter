import { Injectable, signal } from '@angular/core';
import { SwapperCurrency } from './swapper-currency/SwapperCurrency';

@Injectable({
  providedIn: 'root'
})
export class SwapperService {

private readonly currency = signal<SwapperCurrency>("USD");


getCurrency()
{
  return this.currency.asReadonly();
}

setCurrency(currency: SwapperCurrency)
{
  this.currency.set(currency);
}

}
