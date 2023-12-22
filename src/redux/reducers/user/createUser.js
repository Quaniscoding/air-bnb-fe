import { createSlice } from '@reduxjs/toolkit';
import { http } from '../../../utils/baseUrl';
import { history } from '../../../utils/history';

const initialState = {};

const createUser = createSlice({
    name: "createUser",
    initialState,
    reducers: {},
});

export const { } = createUser.actions;

export const callCreateUser = (data) => async () => {
    try {
        await http.post(`/createUser`, data);
        history.push("/admin/userManagement");
        return { isCreate: true };
    } catch (err) {
        return new Promise((resolve, reject) => resolve({ isError: true }));

    }
};

export default createUser.reducer;
