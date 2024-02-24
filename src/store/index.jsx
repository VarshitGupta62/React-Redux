import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice"; // Import the userSlice correctly

const store = configureStore({
    reducer: {
        users: userSlice, // Access the reducer property of userSlice
    },
});

export default store;
