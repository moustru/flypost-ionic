import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from "shared/types/simple.type";
import { formatDate } from "shared/utils/date";
import { TranslateService } from "@ngx-translate/core";

@Pipe({
  name: 'deliveryDate'
})
export class DeliveryDatePipe implements PipeTransform {

  private _translates?: {
    ABSENT: string,
    FROM: string,
    TO: string,
    UNTIL: string
  }

  constructor(private translator: TranslateService) {
    this.translator.get('ORDER.CONTENT.DELIVERY_DATE')
      .subscribe(translates => this._translates = translates)
  }

  transform(from?: Timestamp, to?: Timestamp): string {
    if (!from && !to) {
      return this._translates!.ABSENT
    }

    if (from && to) {
      return `${this._translates!.FROM} ${formatDate(from)} ${this._translates!.TO} ${formatDate(to)}`
    }

    return from
      ? `${this._translates!.FROM} ${formatDate(from)}`
      : `${this._translates!.UNTIL} ${formatDate(to!)}`
  }
}
