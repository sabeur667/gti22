import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class SayHelloService {

  constructor(
    private loggerService: LoggerService
  ) { }
  sayHello() {
    this.loggerService.log('Hello');
  }
}
