import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            // console.log(action.payload);
            return state.filter((user , index) => index !== action.payload);
        },
        deleteUser() {
             return [];
        }
    },
});

// console.log(userSlice.actions); // {addUser
export const { addUser , removeUser , deleteUser } = userSlice.actions;
export default userSlice.reducer; // Export the userSlice object
