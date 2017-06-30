import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCapitalize'
})
export class CapitalizePipe implements PipeTransform {

  public transform(value: string): string {
    if (value) {
      return value.toLowerCase()
                  .replace( /\b./g, (a) => a.toUpperCase() );
    }

    return null;
  }

}
