import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content_interface";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentArray: Content[];
  message: string;

  // constructor() {
  // }
  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {

    this.contentService.getContentObs().subscribe((content) => {
      this.contentArray = content;
    });

  }

  searchContent(search:String):void{
    let exist = this.contentArray.find(content => content.title.toLowerCase() == search.toLowerCase());
    alert(exist ? `${search} exist!` : `${search} does not exist!`);
  }
  addContentToList(newContentFromChild: Content): void {
    this.contentArray.push(newContentFromChild);
    console.log("PUSHED " + this.contentArray.length);
    console.log("PUSHED " + newContentFromChild.title);
    // We need to clone the array for the pipe to work
    this.contentArray = Object.assign([], this.contentArray);
  }

  // searchContent(title:String): void {
  //   // this.message = "Book not found";
  //   // for (let i = 0; i < this.contentArray.length; i++) {
  //   //   if (this.contentArray[i].title === title) {
  //   //     this.message = "Found your book!";
  //   //     break;
  //   //   }
  //   // }
  //
  //   let existType = this.contentArray.filter(book => book.title === title);
  //   if (existType.length > 0) {
  //     this.message = "Book found with title."
  //   } else {
  //     this.message = "No book found with title.";
  //   }
  //  // alert(existType ? `${title} exist!` : `${title} does not exist!`);
  //   this.contentArray = [...this.contentArray]
  // }

}
