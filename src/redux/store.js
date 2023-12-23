import { configureStore } from '@reduxjs/toolkit'
import userSignIn from './reducers/auth/userSignIn'
import userSignUp from './reducers/auth/userSignUp'
import getUser from './reducers/user/getUser'
import getUserById from './reducers/user/getUserById'
import getUserByPagination from './reducers/user/getUserByPagination'
import updateUser from './reducers/user/updateUser'
import callPostAvatarUser from './reducers/user/postAvatarUser'
import deleteUser from './reducers/user/deleteUser'
import createUser from './reducers/user/createUser'
import getSearchUser from './reducers/user/searchUser'
export const store = configureStore({
    reducer: {
        userSignIn,
        userSignUp,
        getUser,
        getUserByPagination,
        updateUser,
        deleteUser,
        callPostAvatarUser,
        getUserById,
        createUser,
        getSearchUser
    },
})