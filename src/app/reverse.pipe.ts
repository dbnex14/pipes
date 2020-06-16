import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    // since javascript reverse works on arrays but not on strings,
    // we split it by empty char to get an array, then reverse it,
    // then join it by empty character back to get string.
    return value.split('').reverse().join('');
  }

}
