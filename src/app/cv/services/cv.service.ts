import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', '', '123',39),
      new Cv(2, 'sellaouti', 'aymen', 'teacher', '              ', '123',39),
      new Cv(3, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile.png', '123',39),
    ]
  }

  getCvs(): Cv[] {
    return this.cvs;
  }
}
