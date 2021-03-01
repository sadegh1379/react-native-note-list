import {ADD_NOTE , DELETE_NOTE , EDIT_NOTE} from '../types/Types';

let idGenerate = 0 ;
const initialState = {
    notes: [{
        id : 1,
        title : 'sadegh',
        body : 'sadegh akbari'
    },
    {
        id : 2,
        title : 'ali',
        body : 'ali mirzaei'
    },
    {
        id : 3,
        title : 'reza',
        body : 'reza ahmadi'
    },
    
],
    
}


export const AddNoteReducer = (state = initialState , action )=>{
    switch (action.type) {
        case ADD_NOTE:
            let pre = [...state.notes];
            pre.push({
                id : ++idGenerate,
                ...action.payload
               
            })
            console.log("new note : " , pre);
            return{
                ...state,
                notes : pre
            }
            
        default:
            return state;
    }
}