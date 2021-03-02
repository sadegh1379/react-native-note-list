import {ADD_NOTE , DELETE_NOTE , EDIT_NOTE , GET_STORAGE} from '../types/Types';

export const add_note = (note)=>{
    return{
        type : ADD_NOTE,
        payload : note,
    }
}
export const get_store = ()=>{
    return{
        type : GET_STORAGE,
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