import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { INotesList } from 'src/app/store';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  @select('notes') notesList;

  constructor(private ngRedux: NgRedux<INotesList>) { }

  ngOnInit() {
  }

}