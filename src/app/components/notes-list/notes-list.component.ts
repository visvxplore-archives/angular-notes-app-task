import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { INote, INotesList } from 'src/app/store';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  @select('notes') notesList;

  constructor(
    private ngRedux: NgRedux<INotesList>,
    private _notes: NotesService
  ) { }

  activeNote: INote;

  ngOnInit() {
  }

  editNote(note:INote) {
    this.activeNote = note;
    this._notes.modifyNote(note.id);
  }

}