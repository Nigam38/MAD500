import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content_interface";

@Pipe({
  name: 'filterContent'
})
export class FilterContentPipe implements PipeTransform {

  transform(contentList: Content[], filterType?: string, filterBody?: string): Content[] {
    // if (contentList && contentList.length){
    //   return contentList.filter(content=> {
    //     if (content.type == filterType) {
    //       return true;
    //     }
    //     if (content.body != "") {
    //       return true;
    //     }
    //     return false
    //   })
    // } else {
    //   return contentList
    // }

    return contentList.filter(content => content.type == filterType);
  }

}
