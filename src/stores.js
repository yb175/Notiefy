// Global Store for managing state
import { configureStore } from '@reduxjs/toolkit';
import recentlyDeletedSlice from './components/slice/slice2';
import recentlyEditedSlice from './components/slice/slice1';
const store = configureStore({
    reducer : {
        recentlyEdited : recentlyEditedSlice,
        recentlyDeleted : recentlyDeletedSlice,
    }
})

export default store