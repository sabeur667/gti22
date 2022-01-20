import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  bgc = '';
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.defaultColor = params['couleur'];
        this.bgc = this.defaultColor;
      }
    );

    this.activatedRoute.queryParams.subscribe(
      (cc) => {
        console.log(cc);
      }
    );
  }
  changeColor(newColor: string): void {
    this.bgc = newColor;
  }

}
