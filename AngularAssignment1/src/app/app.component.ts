import { Component } from '@angular/core';
import {Content} from "./helper-files/content_interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nigam\'s AngularAssignment';



  public constructor() {
  }

  ngOnInit(): void {
  };
}
