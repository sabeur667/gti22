import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  //Définition des attributs à manipuler
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() { }
  //Définition des events à gérer
  @HostListener('keyup') onKeyUp() {
        this.bc = this.color = this.getRandomColor();
  }
  getRandomColor(): string {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  }
}
