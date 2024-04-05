import { configureStore } from '@reduxjs/toolkit';
import taxReducer from './taxSlice'

export default configureStore({
    reducer : taxReducer
})