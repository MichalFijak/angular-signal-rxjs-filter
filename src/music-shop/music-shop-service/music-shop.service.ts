import { Injectable, signal } from "@angular/core";
import { MusicInfo } from "../music-info";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({providedIn:'root'})
export class MusicShopService
{

  private readonly apiUrl = 'api/currency'
  private readonly currencyForMusic =
{
  USD:1,
  EUR:0.95,
  GBP:2,
}
  
  private readonly musicInfos:MusicInfo[] =
  [
    {
    id:1,
    artist:'artist1',
    albumName:'albumName1',
    picture:"albumPicture1",
    price:20,
  },
  {
    id:2,
    artist:'artist2',
    albumName:'albumName2',
    picture:"albumPicture2",
    price:12,

  },
  {
    id:3,
    artist:'artist3',
    albumName:'albumName3',
    picture:"albumPicture3",
    price:7,

  }
]

    private readonly musicInfosSignal = signal<MusicInfo[]>(this.musicInfos)

    getExchangeRateForMusic(): Observable<CurrencyForMusic>
    {
      return of(this.currencyForMusic);
    }

    getMusicInfo()
    {   
        return this.musicInfosSignal;
    }

    changeCurrency()
    {
      console.log()
    }
}


export type CurrencyForMusic = Record<Currency,number>

export type Currency = 
  'USD' | 'EUR' | 'GBP'
