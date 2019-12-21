import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { map } from 'rxjs/operators';
import { INote, INotesList } from 'src/app/store';
import { NotesService } from '../../services/notes.service';
import { REFRESH } from '../../actions';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.css']
})
export class NotesEditorComponent implements OnInit {

  @select('notes') notes;

  constructor(
    private ngRedux: NgRedux<INotesList>,
    private _notes: NotesService
  ) { }

  editorNote:INote = null;

  ngOnInit() {
    this._notes.editNote.subscribe( id => {
      if(!id) return;
      const note = this.getNote(id);
      note.subscribe(editorNote => {
        editorNote ? this.editorNote = editorNote : this.editorNote = null;
      })
    });
  }

  getNote(id:string) {
    return this.notes.pipe(
      map((all:Array<INote>) => all.filter(n => n.id === id)[0])
    );
  }

  noteKeysUp() {
    this.ngRedux.dispatch({type: REFRESH});
  }

}