import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../../utils/baseUrl';
import { saveLocal, saveStringLocal } from '../../../utils/config';
import { DATA_USER, USER_LOGIN } from '../../../utils/constant';
import { history } from '../../../utils/history';

const initialState = {

}

const userSignIn = createSlice({
    name: "userSignIn",
    initialState,
    reducers: {}
});

export const { } = userSignIn.actions

export default userSignIn.reducer

export const callLogin = (userSignIn) => async () => {
    try {
        const apiLogin = await http.post("/auth/signin", userSignIn);
        saveStringLocal(USER_LOGIN, apiLogin.data.Token
        )
        saveLocal(DATA_USER, apiLogin.data.content)
        history.push('/')
        return { isLogin: true }
    } catch (err) {
        return new Promise((resolve, reject) =>
            resolve({ isError: true }));
    }
}