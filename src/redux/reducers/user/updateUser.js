import { createSlice } from '@reduxjs/toolkit';
import { http } from '../../../utils/baseUrl';
import { history } from '../../../utils/history';

const initialState = {};

const updateUser = createSlice({
    name: "updateUser",
    initialState,
    reducers: {},
});

export const { } = updateUser.actions;

export const callUpdateUser = (id, data) => async () => {
    try {
        await http.put(`/updateUser/${id}`, data);
        history.push("/admin/userManagement");
        return { isUpdate: true };
    } catch (err) {
        return { isUpdate: false };
    }
};

export default updateUser.reducer;
