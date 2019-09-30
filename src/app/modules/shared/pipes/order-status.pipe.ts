import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from "shared/types/simple.type";
import { TranslateService } from "@ngx-translate/core";

@Pipe({ name: 'orderStatus' })
export class OrderStatusPipe implements PipeTransform {

  private _translation?: string

  constructor(private translator: TranslateService) { }

  transform(status: OrderStatus): string {
    this.translator.get(`ORDER.STATUS.${status}`)
      .subscribe(translation => this._translation = translation)

    return this._translation || 'ERROR'
  }

}
