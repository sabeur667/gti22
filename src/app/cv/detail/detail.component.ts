import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../services/embauche.service";
import {ToastrService} from "ngx-toastr";

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
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
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
