import { Injectable, signal } from "@angular/core";
import { MusicInfo } from "../music-info";

@Injectable({providedIn:'root'})
export class MusicShopService
{
  
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

    changeCurrency()
    {

    }
}

export interface CurrencyForMusic
{
  USD:1,
  EUR:0.95,
  GBP:2,
}