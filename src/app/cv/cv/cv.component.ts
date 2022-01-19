import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {LoggerService} from "../../services/logger.service";
import {SayHelloService} from "../../services/say-hello.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv: Cv | null = null;
  now = new Date();
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) { }

  ngOnInit(): void {
    this.sayHelloService.sayHello();
    this.loggerService.log('cc je suis le CvComponent');
  }


  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
