import { Component, computed, inject, signal } from '@angular/core';
import { SwapperService } from './swapper.service';
import { FormsModule } from '@angular/forms';
import { SwapperCurrency } from './swapper-currency/SwapperCurrency';
import { CurrencyPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-currency-swapper',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './currency-swapper.component.html',
  styleUrl: './currency-swapper.component.css'
})
export class CurrencySwapperComponent {

  currencyPrice=
  {
    "EUR":1.14,
    "USD":1,
    "GBP":1.31
  }

}
