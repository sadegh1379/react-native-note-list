import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../types/Types";

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


  switch (action.type) {
    case ADD_NOTE:
      let pre = [...state.notes];
      pre.push({
        id: ++idGenerate,
        ...action.payload,
      });
      // console.log("new note : " , pre);
      return {
        ...state,
        notes: pre,
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id != action.payload),
      };
    case EDIT_NOTE:
        const {title , body , id } = action.payload;
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


