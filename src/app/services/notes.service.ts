import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable()
export class NotesService {

  constructor() { }

  public editNote:Subject<string> = new Subject();

  modifyNote(id:string) {
    this.editNote.next(id);
  }

}