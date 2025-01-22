import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'countryFormatter'
})
export class CountryFormatterPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}
  transform(value: string, filter:string): SafeHtml {
    if(filter.length===0|| !filter)
    {
      return value;
    }

    let lowerCasedValue = value.toLowerCase();
    let lowerCasedFilter = filter.toLowerCase();

    let formattedValue='';
    let filterIndex  = lowerCasedValue.indexOf(lowerCasedFilter);
    let beforeMatch = lowerCasedValue.substring(0,filterIndex);
    let afterMatch = lowerCasedValue.substring(lowerCasedFilter.length+filterIndex);

    /// 1) Case when filtered string is in middle of word
    if(beforeMatch.length>0)
    {
      formattedValue += beforeMatch[0].toUpperCase() + beforeMatch.substring(1);
    }
      /// case for words like Czech Republic
    let splittedWords=lowerCasedValue.split(' ');
    splittedWords.forEach((word,index)=>{
      if(word.includes(lowerCasedFilter) && index>=0)
      {
        /// if filteredIndex ===0 || filteredIndex ===word.length
        /// + index then upperCase() charAt[0]
        console.log('iteration:',index,word.length)
        if(filterIndex===0 || filterIndex===word.length)
        {
          formattedValue+='<strong>'+ word.charAt(filterIndex).toUpperCase() + lowerCasedFilter.substring(filterIndex+1) + '</strong>'

        }
        else
        {
          formattedValue+='<strong>'+ lowerCasedFilter.charAt(0).toUpperCase() + '</strong>'
        }
      }
    })

    formattedValue += afterMatch;

    return this.sanitizer.bypassSecurityTrustHtml(formattedValue);

  }

}
