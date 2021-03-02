import {createStore , combineReducers} from 'redux';
import {AddNoteReducer } from './reducers/Reducers';


const rootReducer = combineReducers({
    addNote : AddNoteReducer,
    // deleteNote : deleteNoteReducer
})

const Store = createStore(rootReducer);

export default Store;