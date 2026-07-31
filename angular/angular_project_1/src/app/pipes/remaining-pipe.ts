import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining', // Pure pipe
  // pure: false,  // Impure Pipe
})
export class RemainingPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    console.log('Remaining Pipe called...');
    return 100 - value.length;
  }
}
