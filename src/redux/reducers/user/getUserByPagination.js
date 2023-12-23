import { createSlice } from '@reduxjs/toolkit';
import { http } from '../../../utils/baseUrl';

const initialState = {
    listUserByPagination: []
};

const getUserByPagination = createSlice({
    name: 'getUserByPagination',
    initialState,
    reducers: {
        setListUserByPagination: (state, { type, payload }) => {
            state.listUserByPagination = payload;
        }
    }
});

export const { setListUserByPagination } = getUserByPagination.actions;

export default getUserByPagination.reducer;

export const callGetlistUserByPagination = (pageIndex, pageSize, keyWord) => async (dispatch) => {
    try {
        const apiGetlistUserByPagination = await http.get(`/getUser/getUserByPagination?pageIndex=${pageIndex}&pageSize=${pageSize}&keyWord=${keyWord}`);
        dispatch(setListUserByPagination(apiGetlistUserByPagination.data.content));
    } catch (err) {
    }
}
