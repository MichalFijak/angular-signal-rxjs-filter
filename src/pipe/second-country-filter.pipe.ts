import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'secondCountryFilter'
})
export class SecondCountryFilterPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: string, filter :string): SafeHtml {

    if(!(filter.length>0) ||!filter)
    {
      return value;
    }
    const lowerCaseValue = value.toLowerCase();
    const lowerCaseFilter = filter.toLowerCase();
    const index = lowerCaseValue.indexOf(lowerCaseFilter);

    const beforeMatch = value.substring(0,index);
    const match = '<strong>'+value.substring(index,index+filter.length)+'</strong>';
    const afterMatch = value.substring(index+filter.length);

    const finalValue = beforeMatch+match+afterMatch;
    return this.sanitizer.bypassSecurityTrustHtml(finalValue)
  }
}

// {

//   const regex = new RegExp(`(${filter})`, 'i');
//   const match = value.match(regex);
  
  
//   if (match) {
//     const index = match.index as number;
//     return this.sanitizer.bypassSecurityTrustHtml(value.substring(0, index) + '<strong>' + value.substring(index, index + filter.length) + '</strong>' + value.substring(index + filter.length));
//   }

//   return value;

// }