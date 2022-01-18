import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  //  1- Créer un Evnement
  @Output() sendDataToDad = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  // 2- Mettre data dans l'event et je l'emmet
  sendData(): void {
    this.sendDataToDad.emit('cc papa');
  }
}
