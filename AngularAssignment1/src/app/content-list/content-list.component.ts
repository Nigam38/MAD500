import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content_interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  @Input() contentArray: any;
  constructor() {

  }

  ngOnInit() {

  }
}
