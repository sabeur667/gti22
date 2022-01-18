import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  bgc = '';
  constructor() { }

  ngOnInit(): void {
    this.bgc = this.defaultColor;
  }
  changeColor(newColor: string): void {
    this.bgc = newColor;
  }

}
