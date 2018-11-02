import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
moment.locale('th');
@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return moment(value).calendar();
  }

}
