import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content_interface";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<string>();
  newContent: Content;

  error?: string;
  id: number;
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  onAddNewValue(
    title: string,
    body: string,
    author: string,
    imgUrl: string,
    type: string,
    tags: string
  ) {
    this.newContent = {
      id: 0,
      title: title,
      body: body,
      author: author,
      imageUrl: imgUrl,
      type: type,
      tags: [tags]
    };
    let promiseToAddNews = new Promise((success, fail) => {
      if (body && title && author) {
        this.error = undefined;
        this.newContentEvent.emit(this.newContent);
        success(`Added! - ${this.newContent.title}`);

      } else {
        this.error = `please fill the required fields: ${
          title ? '' : 'Title, '
        } ${body ? '' : 'Body,'} ${author ? '' : ' and Author'}`;
        fail(this.error);
      }
    });

    promiseToAddNews
      .then((successMessage) => console.log(successMessage))
      .catch((failMessage) => console.log(failMessage));
  }

  onUpdateValue(
     title: string,
     body: string,
     author: string,
     imgUrl: string,
     type: string,
     tags: string
  ) {
    this.newContent = {
      id: 0,
      title: title,
      body: body,
      author: author,
      imageUrl: imgUrl,
      type: type,
      tags: [tags],
    };

    console.log(this.newContent);

    if (body && title && author) {
      this.error = undefined;
      this.contentService
        .updateContent(this.newContent)
        .subscribe((response) => {
          console.log(response);
        });
    } else {
      this.error = `You need to add all required fields: ${
        title ? '' : 'title,'
      } ${body ? '' : 'body, and'} ${author ? '' : 'author'}`;
    }
  }

}
