import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appName = 'jest-preset-angular-issue';
  userName: string;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.userName = this.appService.getUserName();
  }
}
