import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  defaultColor = 'red';
  bgc = this.defaultColor;
  constructor() { }

  ngOnInit(): void {
  }
  changeColor(newColor: string): void {
    this.bgc = newColor;
  }

}
