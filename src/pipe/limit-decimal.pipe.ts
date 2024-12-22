import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'limitDecimal'
})
export class LimitDecimalPipe implements PipeTransform
{
    transform(value: number, decimalPlaces:number=2) {
        if(typeof value!=='number')
        {
            return value
        }
        return value.toFixed(decimalPlaces);
    }
    
}