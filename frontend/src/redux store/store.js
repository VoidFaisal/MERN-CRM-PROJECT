import { configureStore } from "@reduxjs/toolkit";
import SidebarToggleSlice from "./slices/Sidebar/SidebarToggleSlice";
export const store = configureStore({
    reducer:{
        sidetoggle:SidebarToggleSlice
    }
})