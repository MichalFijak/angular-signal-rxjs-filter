import { Component, OnInit, Signal, signal } from '@angular/core';
import { MusicInfo } from './music-info';
import { CommonModule } from '@angular/common';
import { CurrencyForMusic, MusicShopService } from './music-shop-service/music-shop.service';
import { MusicDiskComponent } from './music-disk/music-disk.component';
import { reduce } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-music-shop',
  standalone:true,
  imports: [CommonModule,MusicDiskComponent,MusicDiskComponent],
  template: `
  <div>
  <span>Current currency: {{currency()}}</span>
      <table>
      <tr>
          <th>
              Artist
          </th>          
          <th>
              Album Name
          </th>
          <th>
              Picture
          </th>
          <th>
              Price
          </th>
      </tr>
      <tr *ngFor="let musicInfo of musicInfos()" (click)="choose(musicInfo)">
        <td>
          {{musicInfo.artist}}
        </td>
        <td>
          {{musicInfo.albumName}}
        </td>
        <td>
          {{musicInfo.picture}}
        </td>
        <td>
          {{musicInfo.price}}
      </td>
      </tr>
      </table>
  </div>
  <hr>

  {{currencyChange}}
  <hr>
  <app-music-disk [musicInfo]="musicInfo()" (selectCurrency)="currencyChanged($event)"></app-music-disk>
  `,
  
  styleUrl: './music-shop.component.css'
})
export class MusicShopComponent implements OnInit {
  currencyChange='';
  currency = signal("USD");
  musicInfos!:Signal<MusicInfo[]>;
  musicInfo = signal<MusicInfo>(
  {
    id:0,
    artist:'artist0',
    albumName:'albumName0',
    picture:"albumPicture0",
    price:20,
  })
  currencyForMusic!:Signal<CurrencyForMusic>
  //if not choosen should show nothing as initial value
  constructor(private musicShopServcie: MusicShopService)
  {

  }

  ngOnInit(): void {
    this.musicInfos=this.musicShopServcie.getMusicInfo();
    this.currencyForMusic=toSignal(this.musicShopServcie.getExchangeRateForMusic(), { initialValue: { USD: 1, EUR: 0.95, GBP: 2 } });
  }
  


  
  choose(musicInfoFromArray:MusicInfo)
  {
    this.musicInfo.set(musicInfoFromArray);
  }
  currencyChanged(newCurrency:string)
  {
    this.currencyChange=newCurrency;
  }


}


