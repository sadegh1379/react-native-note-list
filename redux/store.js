import {createStore , combineReducers} from 'redux';
import {AddNoteReducer} from './reducers/Reducers';


const rootReducer = combineReducers({
    addNote : AddNoteReducer
})

const Store = createStore(rootReducer);

export default Store;