import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../../utils/baseUrl';

const initialState = {
    listUser: []
}

const getUser = createSlice({
    name: "getUser",
    initialState,
    reducers: {
        getListUser: (state, { type, payload }) => {
            state.listUser = payload;
        }
    }
});

export const { getListUser } = getUser.actions

export default getUser.reducer
export const callGetListUser = () => async (dispatch) => {
    try {
        const apiGetListUser = await http.get(`/getUser`);
        dispatch(getListUser(apiGetListUser.data.content));
    } catch (err) {
        console.log(err);
    }
}
