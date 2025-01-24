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

    const phrase = filter.toLowerCase();
    const regex = new RegExp(`(${phrase})`, 'i');
    
    const words = value.split(' ');

    const highlightedWords = words.map(word => {
      const lowerWord = word.toLowerCase();
      if (lowerWord.includes(phrase)) {
        /// myb lets take the index of matching element and then return word.CharAt[index];
        const formattedWord = word.replace(regex, (match, p1, offset) => {
          if (offset === 0) {
            return `<strong>${match.charAt(0).toUpperCase()}${match.slice(1)}</strong>`;
          }
          return `<strong>${match}</strong>`;
        });
        return formattedWord;
      } else {
        return this.capitalizeFirstLetter(word);
      }
    });

    const sanitizedCountry = highlightedWords.join(' ');
    return this.sanitizer.bypassSecurityTrustHtml(sanitizedCountry);
  }
  
      private capitalizeFirstLetter(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1)
      }
}


