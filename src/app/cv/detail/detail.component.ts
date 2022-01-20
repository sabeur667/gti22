import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../services/embauche.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../services/cv.service";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // State du component
  @Input() cv: Cv | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService,
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.cvService.selectCvSubject
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(
      (cvJdid) => this.cv = cvJdid
    )
  }
  embaucher() {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toaster.success(`
        ${this.cv?.firstname} ${this.cv?.name} a été ajouté succès
      `);
    } else {
      this.toaster.warning(`
        ${this.cv?.firstname} ${this.cv?.name} est déjà pré selectionné
      `);
    }
  }

}
