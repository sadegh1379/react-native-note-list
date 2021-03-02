import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE , GET_STORAGE } from "../types/Types";
import AsyncStorage from '@react-native-async-storage/async-storage';



let idGenerate = 0;
const initialState = {
  notes: [],
};



export const AddNoteReducer = (state = initialState, action) => {

    // const findIndex = (id)=>{
    //     console.log(state);
    //     const item = state.notes.filter((note)=>note.id == id);
    //     console.log("f Item :" , item);
    //     const index = state.notes.indexOf(item);
    //     console.log("Index :" , index );
    //     return index;
    // }

    const storeData = (value) => {
        localStorage.setItem('notes' , JSON.stringify(value));
      }
      const getData = (name) => {
       return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : []
      }
  switch (action.type) {
    case GET_STORAGE : 
        const storage_notes = getData('notes');
        console.log(storage_notes);
        if(storage_notes.length > 0){
            return{
                ...state ,
                notes : storage_notes
            }
        }else{
            return{
                ...state,
                notes : []
            }
        }
    case ADD_NOTE:
      let pre = [...state.notes];
      pre.push({
        id: ++idGenerate,
        ...action.payload,
      });
      // console.log("new note : " , pre);
      storeData(pre);
      return {
        ...state,
        notes: pre,
      };

    case DELETE_NOTE:
      storeData(state.notes.filter((note) => note.id != action.payload))
      return {
        ...state,
        notes: state.notes.filter((note) => note.id != action.payload),
      };
    case EDIT_NOTE:
        const {title , body , id } = action.payload;
        storeData(state.notes.map((note)=>{
            if(note.id == id){
                note.title = title;
                note.body = body;
                note.id = id
            }
            return note;
        }))
        return{
            ...state,
            notes : state.notes.map((note)=>{
                if(note.id == id){
                    note.title = title;
                    note.body = body;
                    note.id = id
                }
                return note;
            })
        }

    default:
      return state;
  }
};


