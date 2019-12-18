import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesNavComponent } from './components/notes-nav/notes-nav.component';
import { NotesEditorComponent } from './components/notes-editor/notes-editor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NotesListComponent, NotesNavComponent, NotesEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
