import { Component, computed, input, output, signal } from '@angular/core';
import { MusicInfo } from '../music-info';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music-disk',
  imports: [CommonModule,FormsModule],
  template: `
  <ng-container *ngIf="isChosen(); else chooseSomeMusic">
    <table>
    <td>
      Arist: {{musicInfo().artist}}
    </td>
    <td>
      Album name: {{musicInfo().albumName}}
    </td>
    <td>
      Picture: {{musicInfo().picture}}
    </td>
    <td>
      Price: {{musicInfo().price}}
    </td>
    </table>
    <select
    [(ngModel)]="currency"
    (ngModelChange)="emitCurrency()"
    >
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
    </select>
  </ng-container>
  <ng-template #chooseSomeMusic>
  Choose Some Music!</ng-template>

`,
  styleUrl: './music-disk.component.css'
})
export class MusicDiskComponent {

  currency=signal("USD");
  musicInfo = input.required<MusicInfo>();
  selectCurrency = output<string>();
  emitCurrency()
  {
    this.selectCurrency.emit(this.currency());
  }
  isChosen = computed(()=>this.musicInfo().id>0)
}
