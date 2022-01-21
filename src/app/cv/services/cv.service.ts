import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {API} from "../../config/api.config";
import {DeleteResponseDto} from "../../dtos/cv/delete-response.dto";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv[] = [];
  selectCvSubject = new Subject<Cv>();
  constructor(
    private http: HttpClient
  ) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', '', '123',39),
      new Cv(2, 'sellaouti', 'aymen', 'teacher', '              ', '123',39),
      new Cv(3, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile.png', '123',39),
    ]
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find(
      (cv) => cv.id === +id
    ) ?? null;
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(API.cv + id);
  }
  deleteFakeCv(cv: Cv | null): boolean {
    if (cv) {
      const index = this.cvs.indexOf(cv);
      if (index > -1) {
        this.cvs.splice(index, 1);
        return true;
      }
    }
    return false
  }
  deleteCv(cv: Cv): Observable<DeleteResponseDto> {
    const params = new HttpParams().set('access_token', localStorage.getItem('token')??'');
    return this.http.delete<DeleteResponseDto>(API.cv + cv.id, {params});
  }
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
  addCv(cv: Cv): Observable<Cv> {
    const headers = new HttpHeaders().set('Authorization', localStorage.getItem('token')??'');
    return this.http.post<Cv>(API.cv, cv, {headers});
  }
  addFakeCv(cv: Cv) {
    cv.id = this.cvs[this.cvs.length - 1].id + 1;
    this.cvs.push(cv);
  }
}
