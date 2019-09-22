import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from "shared/types/simple.type";
import { formatDateTime } from "shared/utils/date";

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(timestamp: Timestamp): string {
    return formatDateTime(timestamp)
  }
}
