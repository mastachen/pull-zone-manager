import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'megaByte',
})
export class MegaBytePipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) {
      return '0 MB';
    } 
    else {
      const megaBytes = (value / (1024 * 1024)).toFixed(2);
      return `${megaBytes} MB`;
    }
  }
}
