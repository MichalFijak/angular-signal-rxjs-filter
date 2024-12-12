import { Component, computed, input } from '@angular/core';
import { MusicInfo } from '../music-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-disk',
  imports: [CommonModule],
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
  </ng-container>
  <ng-template #chooseSomeMusic>
  Choose Some Music!</ng-template>
`,
  styleUrl: './music-disk.component.css'
})
export class MusicDiskComponent {


  musicInfo = input.required<MusicInfo>();

  isChosen = computed(()=>this.musicInfo().id>0)
}
