import { Component, OnInit, Signal, signal } from '@angular/core';
import { MusicInfo } from './music-info';
import { CommonModule } from '@angular/common';
import { MusicShopService } from './music-shop-service/music-shop.service';
import { MusicDiskComponent } from './music-disk/music-disk.component';
import { LimitDecimalPipe } from '../pipe/limit-decimal.pipe';

@Component({
  selector: 'app-music-shop',
  imports: [CommonModule,MusicDiskComponent,MusicDiskComponent,LimitDecimalPipe],
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
          {{musicInfo.price | limitDecimal:2}}
      </td>
      </tr>
      </table>
  </div>
  <hr>
  <hr>
  <app-music-disk [musicInfo]="musicInfo()" (selectCurrency)="currencyChanged($event)"></app-music-disk>
  `,
  
  styleUrl: './music-shop.component.css'
})
export class MusicShopComponent implements OnInit {
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
  constructor(private musicShopServcie: MusicShopService)
  {

  }

  ngOnInit(): void {
    this.musicInfos=this.musicShopServcie.getMusicInfo();
  }



  
  choose(musicInfoFromArray:MusicInfo)
  {
    this.musicInfo.set(musicInfoFromArray);
  }
  currencyChanged(newCurrency:string)
  {
    this.currency.set(newCurrency);
    this.musicShopServcie.changeCurrency(newCurrency);
  }
}


