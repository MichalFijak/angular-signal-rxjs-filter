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

    return this.sanitizer.bypassSecurityTrustHtml(value)
  }
}
