import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';


@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const currentTime = new Date();
    const inputTime = new Date(value);

    const timeDifference = currentTime.getTime() - inputTime.getTime();
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (hoursDifference < 1) {
      return `${minutesDifference} minute ago`;
    } else if (hoursDifference < 24) {
      return `${hoursDifference} hour ago`;
    } else if (daysDifference < 7) {
      return `${daysDifference} day ago`;
    } else if (daysDifference < 30) {
      const weeksDifference = Math.floor(daysDifference / 7);
      return `${weeksDifference} week ago`;
    } else {
      return formatDate(inputTime, 'MMM d, y', 'en-US');
    }
  }

}
