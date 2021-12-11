import { Component, OnInit } from '@angular/core';
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LoggingService]
})
export class HomeComponent implements OnInit {

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  public log() {
    console.log(this.loggingService.title);
    this.loggingService.log("Log from Home component");
  }

  public onChange(event: Event) {
    this.loggingService.title = (event.target as HTMLInputElement).value;
  }

}
