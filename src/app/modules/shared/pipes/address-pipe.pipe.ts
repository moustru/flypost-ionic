import { Pipe, PipeTransform } from '@angular/core';
import { Address, RussianAddress } from "shared/types/simple.type";

@Pipe({ name: 'address' })
export class AddressPipe implements PipeTransform {

  transform(address: Address): string {
    switch (address.type) {
      case "RUSSIAN":
        return this.compileRussianAddress(address)

      case "FOOBAR":
        return 'Foobar address'
    }
  }

  private compileRussianAddress(address: RussianAddress): string {
    let messages = Array<string>()

    for (let property in address) {
      if (property in address) {
        messages.push(address[property])
      }
    }

    return messages.join(', ')
  }

}
