import { createSlice } from '@reduxjs/toolkit';
import { http } from '../../../utils/baseUrl';
import { history } from '../../../utils/history';

const initialState = {};

const deleteUser = createSlice({
    name: "deleteUser",
    initialState,
    reducers: {},
});

export const { } = deleteUser.actions;

export const callDeleteUser = (id) => async () => {
    try {
        await http.delete(`/deleteUser/${id}`);
        history.push("/admin/userManagement");
        return { isDelete: true };
    } catch (err) {
        return { isDelete: false };
    }
};

export default deleteUser.reducer;
