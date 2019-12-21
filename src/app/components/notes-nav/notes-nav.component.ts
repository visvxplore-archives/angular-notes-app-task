import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { INote, INotesList } from '../../store';
import { ADD } from '../../actions';

@Component({
  selector: 'app-notes-nav',
  templateUrl: './notes-nav.component.html',
  styleUrls: ['./notes-nav.component.css']
})
export class NotesNavComponent {

  constructor(private ngRedux:NgRedux<INotesList>) { }

  note: INote = {
    title: '',
    description: ''
  }

  @Output() toogleSideBar:EventEmitter<Boolean> = new EventEmitter<Boolean>(true);

  emitToggle() {
    this.toogleSideBar.emit(true);
  }

  addNote() {
    this.ngRedux.dispatch({type: ADD, note: this.note});
  }

}