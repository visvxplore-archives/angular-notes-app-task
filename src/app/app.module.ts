import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { INotesList, rootReducer, stateNotes } from './store';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesNavComponent } from './components/notes-nav/notes-nav.component';
import { NotesEditorComponent } from './components/notes-editor/notes-editor.component';
import { NotesService } from './services/notes.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgReduxModule ],
  declarations: [ AppComponent, HelloComponent, NotesListComponent, NotesNavComponent, NotesEditorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NotesService]
})
export class AppModule {
  constructor(ngRedux: NgRedux<INotesList>) {
    ngRedux.configureStore(rootReducer, stateNotes());
  }
}
