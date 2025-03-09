import { Component, computed, inject, signal } from '@angular/core';
import { SwapperService } from './swapper.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-currency-swapper',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './currency-swapper.component.html',
  styleUrl: './currency-swapper.component.css'
})
export class CurrencySwapperComponent {


}
