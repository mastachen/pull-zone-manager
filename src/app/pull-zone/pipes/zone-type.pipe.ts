import { Pipe, PipeTransform } from '@angular/core';
import { ZoneType } from '../models/zone-type.enum';

@Pipe({
  name: 'zoneType'
})
export class ZoneTypePipe implements PipeTransform {

  transform(value: ZoneType): string {
    return ZoneType[value];
  }

}
