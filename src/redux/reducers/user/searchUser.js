import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../../utils/baseUrl';

const initialState = {
    listUser: []
}

const getSearchUser = createSlice({
    name: "searchUser",
    initialState,
    reducers: {
        setSearchUser: (state, { type, payload }) => {
            state.listUser = payload;
        }
    }
});

export const { setSearchUser } = getSearchUser.actions

export default getSearchUser.reducer
export const callSearchUser = (keyWord) => async (dispatch) => {
    try {
        const res = await http.get(`/searchUser?keyWord=${keyWord}`);
        dispatch(setSearchUser(res.data.content));
    } catch (err) {
        return err;
    }
}
