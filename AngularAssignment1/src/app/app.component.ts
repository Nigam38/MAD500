import { Component } from '@angular/core';
import {Content} from "./helper-files/content_interface";
import {LogUpdateService} from "./services/log-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular assignments by Nigam Patel';


  constructor(private logService: LogUpdateService) {}

  ngOnInit(): void {
  };

  triggerAlertEnzo() {

  }
}
