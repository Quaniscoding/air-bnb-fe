import { createSlice } from '@reduxjs/toolkit';
import { history } from '../../../utils/history';
import { http } from '../../../utils/baseUrl';

const initialState = {};

const postAvatarUser = createSlice({
    name: "postAvatarUser",
    initialState,
    reducers: {},
});

export const { } = postAvatarUser.actions;
export const callPostAvatarUser = (id, dataUpload) => async () => {
    try {
        await http.put(`postAvatarUser/${id}`, dataUpload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        history.push("/admin/userManagement");
        return { isPost: true };
    } catch (err) {
        return { isPost: false };
    }
};

export default postAvatarUser.reducer;
