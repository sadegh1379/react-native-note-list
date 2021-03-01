import {ADD_NOTE , DELETE_NOTE , EDIT_NOTE} from '../types/Types';

export const add_note = (note)=>{
    return{
        type : ADD_NOTE,
        payload : note,
    }
}
export const delete_note = (id)=>{
    return{
        type : DELETE_NOTE,
        payload : id,
    }
}
export const edit_note = (note)=>{
    return{
        type : EDIT_NOTE,
        payload : note,
    }
}