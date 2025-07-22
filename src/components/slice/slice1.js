import { createSlice } from "@reduxjs/toolkit";

const recentlyEditedSlice = createSlice({
    name:"recentlyEdited",
    initialState:[],
    reducers:{
        addRecentlyEdited(state,action){
            state.push(action.payload);
        },
        removeRecentlyEdited(state,action){
            state.splice(state.indexOf(action.payload),1);
        }
    }
})
export default recentlyEditedSlice.reducer
export const {addRecentlyEdited,removeRecentlyEdited} = recentlyEditedSlice.actions 