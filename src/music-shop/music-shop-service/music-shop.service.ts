import { Injectable, computed, signal } from "@angular/core";
import { MusicInfo } from "../music-info";

@Injectable({providedIn:'root'})
export class MusicShopService
{
  private exchangeRate = signal<number>(3)
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

    getMusicInfo()
    {   
        return this.musicInfosSignal;
        
    }

    changeCurrency(newCurrency:string)
    {
      const exchangedCurrency = this.getEnumValue(newCurrency);
      this.exchangeRate.set(exchangedCurrency);
      this.musicInfosSignal.set(computed(()=>this.musicInfosSignal().map(element => {
        return {...element, price:element.price = element.price*this.exchangeRate()}
      }))())
    }

    private getEnumValue(currency:string):number{
      if(currency as keyof typeof CurrencyForMusic)
      {
      return CurrencyForMusic[currency as keyof typeof CurrencyForMusic];
      }
      return 1;
    }
}
// find this cool way in which guy from angular fix this problem
export enum CurrencyForMusic
{
  USD=1,
  EUR=0.95,
  GBP=2,
}