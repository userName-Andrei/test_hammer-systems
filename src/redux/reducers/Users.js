import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "services/UserService";

const initialState = {
    users: [],
    status: 'loading'
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        return UserService.getUsers();
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUser(state, action) {
            state.users = state.users.filter(item => item.id !== action.payload)
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload
            state.status = 'idle'
        }
    }
})

export const {
    deleteUser
} = usersSlice.actions;

export default usersSlice.reducer