import { Component, OnInit } from '@angular/core';
import {CvService} from "../services/cv.service";
import {Cv} from "../model/cv";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {MES_ROUTES} from "../../config/routing.config";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  constructor(
    private cvService:CvService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  addCv(cv: Cv) {
    const cvs = this.cvService.getCvs();
    cv.id = cvs[cvs.length - 1].id + 1;
    this.cvService.addCv(cv);
    this.toastr.success(`Le cv de ${cv.firstname} ${cv.name} a été ajouté avec succès`);
    this.router.navigate([MES_ROUTES.cvList]);
    //   .subscribe(
    //   {
    //     next: (cv) => {
    //       this.toastr.success(`Le cv de ${cv.firstname} ${cv.name} a été ajouté avec succès`);
    //       this.router.navigate(['cv']);
    //     },
    //     error: () => {
    //       this.toastr.error(`Erreur système, veuillez contacter l'admin`);
    //     }
    //   }
    // );
    // this.toastr.success(`Le cv de ${formumaire.value.name} a été ajouté avec succès`);
    // this.router.navigate(['cv']);
  }
}
