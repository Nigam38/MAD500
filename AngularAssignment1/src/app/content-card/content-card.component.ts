import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content_interface";
//import {Content_list} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  @Input() content: Content;
  constructor() {
  }

  ngOnInit(): void {
  }

  onImageClick(id: number) {

  }
}
