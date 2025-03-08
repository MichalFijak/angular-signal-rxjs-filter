import { Component, inject, signal } from '@angular/core';
import { SwapperService } from './swapper.service';
import { FormsModule } from '@angular/forms';
import { SwapperCurrency } from './swapper-currency/SwapperCurrency';

@Component({
  selector: 'app-currency-swapper',
  imports: [FormsModule],
  templateUrl: './currency-swapper.component.html',
  styleUrl: './currency-swapper.component.css'
})
export class CurrencySwapperComponent {

  service = inject(SwapperService);
  currency = this.service.getCurrency();
  switchCurrency = signal<SwapperCurrency>('EUR');
  updateCurrency()
  {
  this.service.setCurrency(this.switchCurrency())
  }
}
