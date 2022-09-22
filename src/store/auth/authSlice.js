import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'checking', //  'checking', 'not-authenticaded','authenticaded'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {

        },
        logout: (state, payload) => {

        },
        checkingCredentials: (state) => {

        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;