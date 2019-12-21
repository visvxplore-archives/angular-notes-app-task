import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { INote, INotesList } from '../../store';
import { ADD, REMOVE } from '../../actions';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-nav',
  templateUrl: './notes-nav.component.html',
  styleUrls: ['./notes-nav.component.css']
})
export class NotesNavComponent implements OnInit {

  constructor(
    private ngRedux: NgRedux<INotesList>,
    private _notes: NotesService
  ) { }

  note: INote = {
    title: '',
    description: ''
  }

  activeNoteId:String;

  @Output() toogleSideBar:EventEmitter<Boolean> = new EventEmitter<Boolean>(true);

  emitToggle() {
    this.toogleSideBar.emit(true);
  }

  ngOnInit() {
    this._notes.editNote.subscribe( id => {
      if(!id) return;
      this.activeNoteId = id;
    });
  }

  addNote() {
    this.ngRedux.dispatch({type: ADD, note: this.note});
  }

  removeNote() {
    if(!this.activeNoteId) return;
    this.ngRedux.dispatch({type: REMOVE, id: this.activeNoteId});
  }

}