import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {ActivatedRoute, Router} from "@angular/router";
import {CvService} from "../services/cv.service";
import {MES_ROUTES} from "../../config/routing.config";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cv = this.cvService.getCvById(params['id']);
        if (!this.cv) {
          // rediriger vers la liste des cvs
          this.router.navigate([MES_ROUTES.cvList]);
        }
      }
    )
  }

  deleteCv() {
    if (this.cvService.deleteCv(this.cv)) {
      this.toaster.success('Cv supprimé avec succès');
      this.router.navigate([MES_ROUTES.cvList]);
    } else {
      this.toaster.error('Problème contacter l admin');
    }
  }
}
