import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'secondCountryFilter'
})
export class SecondCountryFilterPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(value: string, filter :string): SafeHtml {
    if(!(filter.length>0) || filter ===null)
    {
      return value;
    }
    var lowerCasedValue= value.toLowerCase();
    var lowerCasedFilter = filter.toLowerCase();

    var index = lowerCasedValue.indexOf(lowerCasedFilter);
    var beforeMatch = value.substring(0,index);
    var afterMatch = value.substring(index+filter.length,value.length);
    var filteredSubstring =filter.substring(1,filter.length);
    
    var concatValue = beforeMatch + '<strong>'+value[index]+filteredSubstring+'</strong>' + afterMatch;
    return this.sanitizer.bypassSecurityTrustHtml(concatValue);
  }

}
