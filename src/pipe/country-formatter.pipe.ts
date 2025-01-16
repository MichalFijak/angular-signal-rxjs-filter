import { NonNullAssert } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'countryFormatter'
})
export class CountryFormatterPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}
  transform(value: string, filter:string): SafeHtml {
    let lowerCasedValue = value.toLowerCase();
    let lowerCasedFilter=filter.toLowerCase();
    let indexMatcher =0;

    if(filter.length>0)
    {
    let formattedValue='';
    let index  = lowerCasedValue.indexOf(lowerCasedFilter);
    let beforeMatch = lowerCasedValue.substring(0,index);
    let afterMatch = lowerCasedValue.substring(lowerCasedFilter.length+index);

      if(beforeMatch.length>0)
      {
        formattedValue += beforeMatch[0].toUpperCase() + beforeMatch.substring(1);
      }

    let splittedWords=lowerCasedValue.split(' ');

    if(index===0 )
    {
      formattedValue +='<strong>'+lowerCasedFilter.toLocaleUpperCase()+'</strong>';
    }
    else
    {
      formattedValue +='<strong>'+lowerCasedFilter+'</strong>';
    }

    formattedValue += afterMatch;

    return this.sanitizer.bypassSecurityTrustHtml(formattedValue);
    }
    else
    {

      return value;
    }
  }

}
