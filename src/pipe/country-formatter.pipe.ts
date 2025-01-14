import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'countryFormatter'
})
export class CountryFormatterPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}
  transform(value: string, filter:string): SafeHtml {
    let lowerCasedValue = value.toLowerCase();
    if(filter.length>0)
    {
    let formattedValue='';
    let index  = lowerCasedValue.indexOf(filter);
    let x = lowerCasedValue.substring(filter.length);
    console.log(index);
    formattedValue =formattedValue+'<strong>'+filter+'</strong>';
    formattedValue= formattedValue + x;
    return this.sanitizer.bypassSecurityTrustHtml(formattedValue);
    }
    else
    {

      return value;
    }
  }

}
