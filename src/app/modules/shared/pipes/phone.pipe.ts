import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phone' })
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    return `+7${phone.substr(0, 10)}`;
  }

}
