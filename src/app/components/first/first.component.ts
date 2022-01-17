import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = 'aymen';
  isHidden = false;
  buttonValue = 'hide';
  inputContent ='';
  showHide(inputValue: string) {
    this.isHidden = !this.isHidden;
    this.isHidden ? this.buttonValue = 'show' : this.buttonValue = 'hide';
    this.inputContent = inputValue;
  }
}
