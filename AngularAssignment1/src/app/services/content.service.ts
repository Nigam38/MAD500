import { Injectable } from '@angular/core';
import {MessageService} from "./message.service";
import {Content} from "../helper-files/content_interface";
import {CONTENT_LIST} from "../helper-files/contentDB";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private messageService: MessageService) {}

  // synchronous
  getContents(): Content[] {
    return CONTENT_LIST;
  }

  // asynchronous
  getContentObs(): Observable<Content[]> {
    this.messageService.add('Content retrieved!');
    return of(CONTENT_LIST);
  }
}
