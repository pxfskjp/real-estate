import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roomsAndBaths'
})
export class RoomsAndBathsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
