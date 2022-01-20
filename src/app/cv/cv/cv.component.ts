import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {LoggerService} from "../../services/logger.service";
import {SayHelloService} from "../../services/say-hello.service";
import {TodoService} from "../../todo/services/todo.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../services/cv.service";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  // selectedCv: Cv | null = null;
  now = new Date();
  nb = 0;
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private cvService: CvService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.sayHelloService.sayHello();
    this.loggerService.log('cc je suis le CvComponent');
    this.toastr.info('Bienvenu dans notre cvTech :)');
    this.cvService.selectCvSubject
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(
      () => this.nb++
    )
  }


  // getSelectedCv(cv: Cv) {
  //   this.selectedCv = cv;
  //   this.todoService.logTodos();
  // }
}
