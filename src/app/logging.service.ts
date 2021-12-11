import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoggingService {

  public title: string = "default";

  public log(message: string) {
    console.log(message);
  }
}
