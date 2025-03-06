import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { first } from 'rxjs';

@Pipe({
  name: 'secondCountryFilter'
})
export class SecondCountryFilterPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: string, filter :string): SafeHtml {

    let finalValue="";
    if(!(filter.length>0) ||!filter)
    {
      return value;
    }

    let index = value.toLowerCase().indexOf(filter.toLowerCase());
    let beforeMatch= value.substring(0,index);
    let match = value.substring(index,filter.length+index);
    let afterMatch = value.substring(filter.length+index);

    finalValue+=beforeMatch;
    finalValue+='<strong>'+match+'</strong>';
    finalValue+=afterMatch;

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