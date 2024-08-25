import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }
export const SidebarToggleSlice = createSlice({
    initialState,
    name:'toggle',
    reducers:{
        toggleSidebar:(state)=> {state.value = !state.value; }

        
    },
})

export const {toggleSidebar} = SidebarToggleSlice.actions
export default SidebarToggleSlice.reducer