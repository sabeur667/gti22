import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  selectCvSubject = new Subject<Cv>();
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
  getCvById(id: number): Cv | null {
    return this.cvs.find(
      (cv) => cv.id === +id
    ) ?? null;
  }
  deleteCv(cv: Cv | null): boolean {
    if (cv) {
      const index = this.cvs.indexOf(cv);
      if (index > -1) {
        this.cvs.splice(index, 1);
        return true;
      }
    }
    return false
  }
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }

  addCv(cv: Cv) {
    this.cvs.push(cv);
  }
}
