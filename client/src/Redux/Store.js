import { configureStore } from '@reduxjs/toolkit';
import taxReducer from './taxSlice' ;
import serviceReducer from './serviceSlice'

export default configureStore({
    // reducer : taxReducer ,
    // reducer : serviceReducer
    reducer: {
        tax: taxReducer,
        service: serviceReducer
    }
})