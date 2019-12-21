import { ADD, EDIT, REMOVE, REFRESH, STORAGEID } from './actions';
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

const INITIAL_STATE: INotesList = {
  notes: []
}

export function stateNotes() {
  const STORAGE_STATE = JSON.parse(localStorage.getItem(STORAGEID));
  if(!STORAGE_STATE) return INITIAL_STATE;
  return STORAGE_STATE;
}

export function rootReducer(state, action) {
  switch(action.type) {
    case ADD: 
      action.note.id = shortid.generate();
      action.note.lastUpdate = new Date();
      const addState = Object.assign({}, state, {
        notes: state.notes.concat({... action.note})
      });
      return storgeUpdate(addState);
    case EDIT: // NOT USING
      var editNote = state.notes.find(n => n.id === action.id);
      var index = state.notes.indexOf(editNote);
      action.note.lastUpdate = new Date();
      const nextState = Object.assign({}, state, {
        notes: state.notes.slice(1, index, {... action.note})
      })
      return storgeUpdate(nextState);
    case REMOVE:
      const removeState =  Object.assign({}, state, {
        notes: state.notes.filter(n => n.id !== action.id)
      })
      return storgeUpdate(removeState);
    case REFRESH:
      return storgeUpdate(state);
  }
  return state;
}

function storgeUpdate(state){
  localStorage.setItem(STORAGEID, JSON.stringify(state));
  return state;
}