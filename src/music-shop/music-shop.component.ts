import { Component } from '@angular/core';
import { MusicInfo } from './music-info';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-shop',
  imports: [CommonModule],
  template: `
  <div>
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
      <tr *ngFor="let musicInfo of musicInfos">
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
          {{musicInfo.price}}:{{musicInfo.currency}}
      </td>
      </tr>

      </table>
  </div>
  <hr>
  
  <p>Your actual chosen disk!</p>
  `,
  
  styleUrl: './music-shop.component.css'
})
export class MusicShopComponent {


  // this should end in service
  public readonly musicInfos:MusicInfo[] =
  [
    {
    id:1,
    artist:'artist1',
    albumName:'albumName1',
    picture:"albumPicture1",
    price:20,
    currency:'USD',
  },
  {
    id:2,
    artist:'artist2',
    albumName:'albumName2',
    picture:"albumPicture2",
    price:12,
    currency:'EUR',

  },
  {
    id:3,
    artist:'artist3',
    albumName:'albumName3',
    picture:"albumPicture3",
    price:7,
    currency:'GBP',

  }
  ]
  choose()
  {
    // heree we will chose the disk and send id of it to service in which we will
    // send what we should display in bigger table
  }
}


