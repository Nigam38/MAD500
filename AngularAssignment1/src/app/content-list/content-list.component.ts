import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content_interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contentArray: Content[];
  message: string;

  constructor() {
  }

  ngOnInit(): void {
    this.contentArray = [{
      id: 1,
      author: "William Craig",
      imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498139456l/435556._SX318_.jpg",
      type: "History",
      title: "Enemy at the Gates",
      body: "he Battle for Stalingrad is a book written by William Craig and published in 1973 by Reader's Digest Press and in 1974 by Penguin Publishing.",
      tags: []
    },{
      id: 2,
      author: " Brian Michael Bendis",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Avengers_vs._X-Men.jpg/250px-Avengers_vs._X-Men.jpg",
      type: "Comics",
      title: "Avengers",
      body: "Avengers vs. X-Men is a 2012 crossover event that was featured in comic books published by Marvel Comics",
      tags: ['Avengers','X-Men']
    }, {
      id: 3,
      author: "Nigam Patel",
      imageUrl: "",
      type: "",
      title: "Assignment 2",
      body: "Using component",
      tags: []
    }, {
      id: 4,
      author: "John Hersey",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71RuxECCcAL.__BG0,0,0,0_FMpng_AC_UL600_SR390,600_.jpg",
      type: "Non-fiction",
      title: "Hiroshima",
      body: "",
      tags: ['Bombing','Nuclear']
    }, {
      id: 5,
      author: "James Clear",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL.jpg",
      type: "",
      title: "Atomic Habits",
      body: "Atomic Habits offers a proven framework for improving-every day",
      tags: ['Good Habits']
    },{
      id: 6,
      author: "Herodotus",
      imageUrl: "",
      type: "History",
      title: "Histories",
      body: "",
      tags: []
    },{
      id: 7,
      author: "Daniel Clowes",
      imageUrl: "",
      type: "Comics",
      title: "Ghost World",
      body: "Ghost World is a graphic novel by Daniel Clowes.",
      tags: ['Novel']
    } ];
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
