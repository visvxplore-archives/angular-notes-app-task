import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notes-nav',
  templateUrl: './notes-nav.component.html',
  styleUrls: ['./notes-nav.component.css']
})
export class NotesNavComponent {

  constructor() { }

  @Output() toogleSideBar:EventEmitter<Boolean> = new EventEmitter<Boolean>(true);

  emitToggle() {
    this.toogleSideBar.emit(true);
  }

}