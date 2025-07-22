import { createSlice } from "@reduxjs/toolkit";

const recentlyDeletedSlice = createSlice({
    name:"recentlyDeleted",
    initialState:[],
    reducers:{
        addRecentlyDeleted:(state,action)=>{
            state.push(action.payload);
        }
        
    }
})

export default recentlyDeletedSlice.reducer;
export const {addRecentlyDeleted} = recentlyDeletedSlice.actions