import { ADD, EDIT, REMOVE } from './actions';
import shortid from 'shortid';

export interface INote {
  id?: String;
  title: String;
  description: String;
  lastUpdate?: Date;
}

export interface INotesList {
  notes: Array<INote>
}

export const INITIAL_STATE: INotesList = {
  notes: []
}

export function rootReducer(state, action) {
  switch(action.type) {
    case ADD: 
      action.note.id = shortid.generate();
      action.note.lastUpdate = new Date();
      return Object.assign({}, state, {
        notes: state.notes.concat({... action.note})
      })
    case EDIT:
      var editNote = state.notes.find(n => n.id === action.id);
      var index = state.notes.indexOf(editNote);
      action.note.lastUpdate = new Date();
      return Object.assign({}, state, {
        notes: state.notes.slice(1, index, {... action.note})
      })
    case REMOVE:
      return Object.assign({}, state, {
        notes: state.notes.filter(n => n.id !== action.id)
      })
  }
  return state;
}