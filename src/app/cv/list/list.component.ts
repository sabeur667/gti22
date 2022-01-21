import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  // @Output() forwardCv = new EventEmitter<Cv>();
  constructor(
    private cvService: CvService,
    private toaster: ToastrService
  ) { }
  ngOnInit(): void {
    this.cvService.getCvs().subscribe(
      (cvList) => this.cvs = cvList,
      (erreur) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toaster.error(`Les données sont fake, veuillez contacter l'admin :(`);
      }
    );
  }
  // forwardItem(cv: Cv) {
  //   this.forwardCv.emit(cv);
  // }
}
