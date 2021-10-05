import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content_interface";

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentList: Content[], filterType?: string): Content[] {
    return filterType ? contentList.filter(content => content.type == filterType) : contentList;
  }

}
