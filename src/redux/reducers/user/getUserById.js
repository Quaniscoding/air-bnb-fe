import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../../utils/baseUrl';

const initialState = {
    user: []
}

const getUserByid = createSlice({
    name: "getUserByid",
    initialState,
    reducers: {
        getUser: (state, { type, payload }) => {
            state.user = payload;
        }
    }
});

export const { getUser } = getUserByid.actions

export default getUserByid.reducer
export const callGetUserById = (id) => async (dispatch) => {
    try {
        const apiGetUserById = await http.get(`/getUserByid/${id}`);
        dispatch(getUser(apiGetUserById.data.content));
    } catch (err) {
        return err;
    }
}
