import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api";

const initialState = {
    loading: false,
    error: false,
    users: [],
};

const usersSlide = createSlice({
    name: "users",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.loading = true;
        },
        setUsers: (state, action) => {
            state.loading = false;
            state.error = false;
            state.users = action.payload;
        },
        setError: (state) => {
            state.error = true;
        },
    },
});

export const { setLoading, setUsers, setError } = usersSlide.actions;

export const selectAllUsers = (state) => state.users;

export default usersSlide.reducer;

export function getUsers() {
    return async (dispatch) => {
        api.get("/users")
            .then((response) => {
                dispatch(setUsers(response.data));
            })
            .catch((er) => {
                dispatch(setError());
            });
    };
}
