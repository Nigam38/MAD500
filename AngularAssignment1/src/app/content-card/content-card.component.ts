import { Component, OnInit } from '@angular/core';
import {Content_list} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  contentList: Content_list = new Content_list({
    id: 1,
    author: "Nigam Patel",
    title: "Assignment 1",
    body: "Using TypeScript for JS.",
  });

  constructor() {
    this.contentList.addContent({
      id: 2,
      author: "Lois Lowry",
      title: "NUMBER THE STARS",
      body: "Number the stars is a wonderful story about bravery and friendship.",
    });
  }

  ngOnInit(): void {
  }

}
